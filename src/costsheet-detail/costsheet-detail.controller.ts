import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { CostsheetDetailService } from './costsheet-detail.service';
import { CostsheetDetail } from './costsheet-detail.entity';

@Controller('costsheet-detail')
export class CostsheetDetailController {
  constructor(private readonly service: CostsheetDetailService) {}

  @Get()
  findAll(): Promise<CostsheetDetail[]> {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<CostsheetDetail> {
    return this.service.findOne(id);
  }

  @Post()
  create(@Body() data: Partial<CostsheetDetail>): Promise<CostsheetDetail> {
    return this.service.create(data);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() data: Partial<CostsheetDetail>,
  ): Promise<CostsheetDetail> {
    return this.service.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.service.remove(id);
  }
}
