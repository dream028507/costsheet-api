import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { ItemsMastService } from './items-mast.service';
import { ItemsMast } from './items-mast.entity';

@Controller('items-mast')
export class ItemsMastController {
  constructor(private readonly service: ItemsMastService) {}

  @Get()
  findAll(): Promise<ItemsMast[]> {
    return this.service.findAll();
  }

  @Get(':ID')
  findOne(@Param('ID') ID: number): Promise<ItemsMast> {
    return this.service.findOne(ID);
  }

  @Post()
  create(@Body() data: Partial<ItemsMast>): Promise<ItemsMast> {
    return this.service.create(data);
  }

  @Put(':ID')
  update(
    @Param('ID') ID: number,
    @Body() data: Partial<ItemsMast>,
  ): Promise<ItemsMast> {
    return this.service.update(ID, data);
  }

  @Delete(':ID')
  remove(@Param('ID') ID: number): Promise<void> {
    return this.service.remove(ID);
  }
}
