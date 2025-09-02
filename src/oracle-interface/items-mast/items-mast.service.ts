import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ItemsMast } from './items-mast.entity';
import { Equal } from 'typeorm';
@Injectable()
export class ItemsMastService {
  constructor(
    @InjectRepository(ItemsMast, 'oracleInterfaceConnection')
    private readonly itemsMastRepository: Repository<ItemsMast>,
  ) {}

  findAll(): Promise<ItemsMast[]> {
    return this.itemsMastRepository.find({
      where: { Inactive: Equal('0') },
    });
  }

  findOne(ID: number): Promise<ItemsMast> {
    return this.itemsMastRepository.findOne({
      where: { ID },
    }) as Promise<ItemsMast>;
  }

  create(data: Partial<ItemsMast>): Promise<ItemsMast> {
    const entity = this.itemsMastRepository.create(data);
    return this.itemsMastRepository.save(entity);
  }

  update(ID: number, data: Partial<ItemsMast>): Promise<ItemsMast> {
    return this.itemsMastRepository.save({ ...data, ID });
  }

  async remove(ID: number): Promise<void> {
    await this.itemsMastRepository.delete(ID);
  }
}
