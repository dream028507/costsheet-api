import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VendorsMast } from './vendors-mast.entity';

@Injectable()
export class VendorsMastService {
  constructor(
    @InjectRepository(VendorsMast, 'oracleInterfaceConnection')
    private readonly repo: Repository<VendorsMast>,
  ) {}

  findAll() {
    return this.repo.find({});
  }
}
