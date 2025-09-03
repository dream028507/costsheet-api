import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { CostsheetDetailService } from './costsheet-detail.service';
import { CostsheetDetail } from './costsheet-detail.entity';

@Controller('costsheet-detail')
export class CostsheetDetailController {
  constructor(private readonly service: CostsheetDetailService) {}

  // More specific route first to avoid matching ':id'
  // GET /costsheet-detail/columns?table=CostsheetDetail&schema=dbo
  @Get('columns')
  getColumns(
    @Query('table') table?: string,
    @Query('schema') schema?: string,
  ): Promise<{ table: string; schema: string; count: number; columns: any[] }> {
    return this.service.getTableColumns(table ?? 'CostsheetDetail', schema ?? 'dbo');
  }

  @Get()
  findAll(): Promise<CostsheetDetail[]> {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<CostsheetDetail> {
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
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.service.remove(id);
  }
}
