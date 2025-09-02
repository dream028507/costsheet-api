import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ItemsMastService } from './items-mast.service';
import { ItemsMast } from './items-mast.entity';

@Controller('items-mast')
export class ItemsMastController {
  constructor(private readonly service: ItemsMastService) {}

  // ดึงเฉพาะที่ Inactive = 0 (ไปกรองใน service)
  @Get()
  findAll(): Promise<ItemsMast[]> {
    return this.service.findAll();
  }

  @Get(':ID')
  findOne(@Param('ID', ParseIntPipe) ID: number): Promise<ItemsMast> {
    return this.service.findOne(ID);
  }

  @Post()
  create(@Body() data: Partial<ItemsMast>): Promise<ItemsMast> {
    return this.service.create(data);
  }

  @Put(':ID')
  update(
    @Param('ID', ParseIntPipe) ID: number,
    @Body() data: Partial<ItemsMast>,
  ): Promise<ItemsMast> {
    return this.service.update(ID, data);
  }

  @Delete(':ID')
  remove(@Param('ID', ParseIntPipe) ID: number): Promise<void> {
    return this.service.remove(ID);
  }
}
