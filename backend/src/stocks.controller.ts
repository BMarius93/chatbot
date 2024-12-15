import { Controller, Get, Param } from '@nestjs/common';
import { StocksService } from './stocks.service';

@Controller('stocks')
export class StocksController {
    constructor(private readonly stocksService: StocksService) {}

    @Get(':exchange')
    getStocks(@Param('exchange') exchange: string) {
        return this.stocksService.getStocks(exchange);
    }

    @Get('details/:stockCode')
    getStockDetails(@Param('stockCode') stockCode: string) {
        return this.stocksService.getStockDetails(stockCode);
    }
}