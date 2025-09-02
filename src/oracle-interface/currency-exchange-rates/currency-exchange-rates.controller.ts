import { Controller, Get } from '@nestjs/common';
import { CurrencyExchangeRatesService } from './currency-exchange-rates.service';

@Controller('currency-exchange-rates')
export class CurrencyExchangeRatesController {
  constructor(private readonly service: CurrencyExchangeRatesService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }
}
