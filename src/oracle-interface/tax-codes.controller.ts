import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { TaxCodesService } from './tax-codes.service';
import { TaxCodes } from './tax-codes.entity';

@Controller('tax-codes')
export class TaxCodesController {
  constructor(private readonly service: TaxCodesService) {}

  @Get()
  findAll(): Promise<TaxCodes[]> {
    return this.service.findAll();
  }

  @Get(':ID')
  findOne(@Param('ID') ID: number): Promise<TaxCodes> {
    return this.service.findOne(ID);
  }

  @Post()
  create(@Body() data: Partial<TaxCodes>): Promise<TaxCodes> {
    return this.service.create(data);
  }

  @Put(':ID')
  update(
    @Param('ID') ID: number,
    @Body() data: Partial<TaxCodes>,
  ): Promise<TaxCodes> {
    return this.service.update(ID, data);
  }

  @Delete(':ID')
  remove(@Param('ID') ID: number): Promise<void> {
    return this.service.remove(ID);
  }
}
