import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { CostSheetMastService } from './costsheet-mast.service';
import { CostSheetMast } from './costsheet-mast.entity';

@Controller('costsheet-mast')
export class CostSheetMastController {
  constructor(private readonly service: CostSheetMastService) {}

  @Get()
  findAll(): Promise<CostSheetMast[]> {
    return this.service.findAll();
  }

  @Get(':CompID/:ContYear/:ContSeq/:SheetCode')
  findOne(
    @Param('CompID') CompID: string,
    @Param('ContYear') ContYear: string,
    @Param('ContSeq') ContSeq: string,
    @Param('SheetCode') SheetCode: string,
  ): Promise<CostSheetMast> {
    return this.service.findOne(CompID, ContYear, ContSeq, SheetCode);
  }

  @Post()
  create(@Body() data: Partial<CostSheetMast>): Promise<CostSheetMast> {
    return this.service.create(data);
  }

  @Put(':CompID/:ContYear/:ContSeq/:SheetCode')
  update(
    @Param('CompID') CompID: string,
    @Param('ContYear') ContYear: string,
    @Param('ContSeq') ContSeq: string,
    @Param('SheetCode') SheetCode: string,
    @Body() data: Partial<CostSheetMast>,
  ): Promise<CostSheetMast> {
    return this.service.update({ CompID, ContYear, ContSeq, SheetCode }, data);
  }

  @Delete(':CompID/:ContYear/:ContSeq/:SheetCode')
  remove(
    @Param('CompID') CompID: string,
    @Param('ContYear') ContYear: string,
    @Param('ContSeq') ContSeq: string,
    @Param('SheetCode') SheetCode: string,
  ): Promise<void> {
    return this.service.remove({ CompID, ContYear, ContSeq, SheetCode });
  }
}
