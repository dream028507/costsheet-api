import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ContractMast } from './contract-mast.entity';

@Injectable()
export class ContractMastService {
  constructor(
    @InjectRepository(ContractMast, 'oracleInterfaceConnection')
    private readonly repo: Repository<ContractMast>,
  ) {}

  findAll() {
    return this.repo.find({});
  }

  findByContractNo(contractNo: string) {
    return this.repo.find({
      where: { contractNo },
    });
  }
}
