import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UnitsOfMeasure } from './units-of-measure.entity';

@Injectable()
export class UnitsOfMeasureService {
  constructor(
    @InjectRepository(UnitsOfMeasure, 'oracleInterfaceConnection')
    private readonly unitsOfMeasureRepository: Repository<UnitsOfMeasure>,
  ) {}

  findAll(): Promise<UnitsOfMeasure[]> {
    return this.unitsOfMeasureRepository.find();
  }

  findOne(ID: number): Promise<UnitsOfMeasure> {
    return this.unitsOfMeasureRepository.findOne({ where: { ID } }) as Promise<UnitsOfMeasure>;
  }

  create(data: Partial<UnitsOfMeasure>): Promise<UnitsOfMeasure> {
    const entity = this.unitsOfMeasureRepository.create(data);
    return this.unitsOfMeasureRepository.save(entity);
  }

  update(ID: number, data: Partial<UnitsOfMeasure>): Promise<UnitsOfMeasure> {
    return this.unitsOfMeasureRepository.save({ ...data, ID });
  }

  async remove(ID: number): Promise<void> {
    await this.unitsOfMeasureRepository.delete(ID);
  }
}
