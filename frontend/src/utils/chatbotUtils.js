import axios from 'axios';

const apiEndpoint = process.env.REACT_APP_API_ENDPOINT;

export const fetchStocks = async (option, messages) => {
    const exchangeCode = option === 'London Stock Exchange' ? 'LSE' : option === 'New York Stock Exchange' ? 'NYSE' : 'NASDAQ';

    try {
        const response = await axios.get(`${apiEndpoint}/stocks/${exchangeCode}`);
        const stockOptions = response.data.map((stock) => ({
            name: stock.stockName,
            code: stock.code,
        }));

        messages.push({
            type: 'bot',
            text: `Please select a stock from ${option}.`,
            options: stockOptions.map((stock) => stock.name),
        });

        return { newMessages: messages, exchangeCode, stocks: stockOptions };
    } catch {
        messages.push({ type: 'bot', text: 'Error fetching stocks. Please try again.' });
        return { newMessages: messages };
    }
};

export const fetchStockDetails = async (option, step, messages) => {
    const selectedStock = step.stocks.find((stock) => stock.name === option);

    if (selectedStock) {
        try {
            const response = await axios.get(`${apiEndpoint}/stocks/details/${selectedStock.code}`);
            const stockPrice = response.data.price;

            messages.push({
                type: 'bot',
                text: `The current price of ${selectedStock.name} is $${stockPrice}. Please select an option.`,
                options: ['Main Menu', 'Go Back'],
            });
        } catch {
            messages.push({ type: 'bot', text: 'Error fetching stock details. Please try again.' });
        }
    }
    return { newMessages: messages };
};

export const handleNavigation = (option, step, messages) => {
    if (option === 'Main Menu') {
        messages.push({
            type: 'bot',
            text: "Welcome back to the Main Menu. Please select a Stock Exchange.",
            options: ['London Stock Exchange', 'New York Stock Exchange', 'NASDAQ Stock Exchange'],
        });
        return { newMessages: messages, step: { menu: 'home', exchange: null, stocks: [] } };
    } else if (option === 'Go Back') {
        messages.push({
            type: 'bot',
            text: 'Please select a stock.',
            options: step.stocks.map((stock) => stock.name),
        });
        return { newMessages: messages, step: { menu: 'stocks', exchange: step.exchange, stocks: step.stocks } };
    }
    return { newMessages: messages, step };
};
