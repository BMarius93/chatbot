import React, { useState } from 'react';
import BotMessage from './BotMessage';
import UserMessage from './UserMessage';
import { fetchStocks, fetchStockDetails, handleNavigation } from '../utils/chatbotUtils';

const Chatbot = () => {
    const [messages, setMessages] = useState([
        {
            type: 'bot',
            text: "Hello! Welcome to LSEG Chatbot. I'm here to help you. Please select a Stock Exchange.",
            options: ['London Stock Exchange', 'New York Stock Exchange', 'NASDAQ Stock Exchange'],
        },
    ]);

    const [step, setStep] = useState({ menu: 'home', exchange: null, stocks: [] });

    const handleOptionSelect = async (option) => {
        const newMessages = [...messages, { type: 'user', text: option }];

        if (step.menu === 'home') {
            const updatedData = await fetchStocks(option, newMessages);
            setMessages(updatedData.newMessages);
            setStep({ menu: 'stocks', exchange: updatedData.exchangeCode, stocks: updatedData.stocks });
        } else if (step.menu === 'stocks') {
            const updatedData = await fetchStockDetails(option, step, newMessages);
            setMessages(updatedData.newMessages);
            setStep({ menu: 'details', exchange: step.exchange, stocks: step.stocks });
        } else if (step.menu === 'details') {
            const updatedData = handleNavigation(option, step, newMessages);
            setMessages(updatedData.newMessages);
            setStep(updatedData.step);
        }
    };

    return (
        <div style={styles.chatbotContainer}>
            <h2 style={styles.title}>LSEG Chatbot</h2>
            <div style={styles.chatWindow}>
                {messages.map((msg, index) => (
                    msg.type === 'bot' ? (
                        <BotMessage key={index} text={msg.text} options={msg.options} onSelect={handleOptionSelect} />
                    ) : (
                        <UserMessage key={index} text={msg.text} />
                    )
                ))}
            </div>
        </div>
    );
};

const styles = {
    chatbotContainer: {
        width: '400px',
        margin: '10px auto',
        border: '1px solid black',
        fontFamily: 'sans-serif',
    },
    title: {
        textAlign: 'center',
        backgroundColor: '#ccc',
        padding: '5px',
        fontSize: '16px',
    },
    chatWindow: {
        height: '300px',
        overflowY: 'scroll',
        padding: '5px',
        backgroundColor: '#eee',
    },
};


export default Chatbot;
