import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PriceLevel } from './price-level.entity';

@Injectable()
export class PriceLevelService {
  constructor(
    @InjectRepository(PriceLevel, 'oracleInterfaceConnection')
    private readonly repo: Repository<PriceLevel>,
  ) {}

  findAll() {
    return this.repo.find({});
  }
}
