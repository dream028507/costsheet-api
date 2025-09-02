import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CostsheetInternalDepartment } from './costsheet-internal-department.entity';

@Injectable()
export class CostsheetInternalDepartmentService {
  constructor(
    @InjectRepository(CostsheetInternalDepartment, 'oracleInterfaceConnection')
    private readonly repo: Repository<CostsheetInternalDepartment>,
  ) {}

  findAll() {
    return this.repo.find();
  }
}
