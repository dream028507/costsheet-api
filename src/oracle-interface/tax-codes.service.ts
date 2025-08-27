import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TaxCodes } from './tax-codes.entity';

@Injectable()
export class TaxCodesService {
  constructor(
    @InjectRepository(TaxCodes, 'oracleInterfaceConnection')
    private readonly taxCodesRepository: Repository<TaxCodes>,
  ) {}

  findAll(): Promise<TaxCodes[]> {
    return this.taxCodesRepository.find();
  }

  findOne(ID: number): Promise<TaxCodes> {
    return this.taxCodesRepository.findOne({ where: { ID } }) as Promise<TaxCodes>;
  }

  create(data: Partial<TaxCodes>): Promise<TaxCodes> {
    const entity = this.taxCodesRepository.create(data);
    return this.taxCodesRepository.save(entity);
  }

  update(ID: number, data: Partial<TaxCodes>): Promise<TaxCodes> {
    return this.taxCodesRepository.save({ ...data, ID });
  }

  async remove(ID: number): Promise<void> {
    await this.taxCodesRepository.delete(ID);
  }
}
