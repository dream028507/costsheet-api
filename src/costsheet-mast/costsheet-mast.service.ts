import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CostSheetMast } from './costsheet-mast.entity';

@Injectable()
export class CostSheetMastService {
  constructor(
    @InjectRepository(CostSheetMast, 'costsheetConnection')
    private readonly costSheetMastRepository: Repository<CostSheetMast>,
  ) {}

  findAll(): Promise<CostSheetMast[]> {
    return this.costSheetMastRepository.find();
  }

  findOne(CompID: string, ContYear: string, ContSeq: string, SheetCode: string): Promise<CostSheetMast> {
    return this.costSheetMastRepository.findOne({
      where: { CompID, ContYear, ContSeq, SheetCode },
    }) as Promise<CostSheetMast>;
  }

  create(data: Partial<CostSheetMast>): Promise<CostSheetMast> {
    const entity = this.costSheetMastRepository.create(data);
    return this.costSheetMastRepository.save(entity);
  }

  update(keys: { CompID: string; ContYear: string; ContSeq: string; SheetCode: string }, data: Partial<CostSheetMast>): Promise<CostSheetMast> {
    return this.costSheetMastRepository.save({ ...data, ...keys });
  }

  async remove(keys: { CompID: string; ContYear: string; ContSeq: string; SheetCode: string }): Promise<void> {
    await this.costSheetMastRepository.delete(keys);
  }
}
