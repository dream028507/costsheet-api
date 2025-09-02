import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CurrencyExchangeRates } from './currency-exchange-rates.entity';

@Injectable()
export class CurrencyExchangeRatesService {
  constructor(
    @InjectRepository(CurrencyExchangeRates, 'oracleInterfaceConnection')
    private readonly repo: Repository<CurrencyExchangeRates>,
  ) {}

  findAll() {
    return this.repo.find({
      take: 10,
    });
  }
}
