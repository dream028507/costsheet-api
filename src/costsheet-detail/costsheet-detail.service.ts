import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CostsheetDetail } from './costsheet-detail.entity';

@Injectable()
export class CostsheetDetailService {
  constructor(
    @InjectRepository(CostsheetDetail)
    private readonly costsheetDetailRepository: Repository<CostsheetDetail>,
  ) {}

  findAll(): Promise<CostsheetDetail[]> {
    return this.costsheetDetailRepository.find();
  }

  findOne(id: number): Promise<CostsheetDetail> {
    return this.costsheetDetailRepository.findOne({
      where: { id },
    }) as Promise<CostsheetDetail>;
  }

  create(data: Partial<CostsheetDetail>): Promise<CostsheetDetail> {
    const entity = this.costsheetDetailRepository.create(data);
    return this.costsheetDetailRepository.save(entity);
  }

  update(id: number, data: Partial<CostsheetDetail>): Promise<CostsheetDetail> {
    return this.costsheetDetailRepository.save({ ...data, id });
  }

  async remove(id: number): Promise<void> {
    await this.costsheetDetailRepository.delete(id);
  }
}
