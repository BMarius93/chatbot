import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class StocksService {
    private data: any;

    constructor() {
        const filePath = path.join(__dirname, '..', 'src', 'stock-data.json');
        const rawData = fs.readFileSync(filePath, 'utf8');
        this.data = JSON.parse(rawData);
    }

    getStocks(exchange: string) {
        const exchangeData = this.data.find((ex: any) => ex.code === exchange);
        return exchangeData ? exchangeData.topStocks : [];
    }

    getStockDetails(stockCode: string) {
        for (const exchange of this.data) {
            const stock = exchange.topStocks.find((s: any) => s.code === stockCode);
            if (stock) return stock;
        }
        return null;
    }
}
