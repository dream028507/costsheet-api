import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { UnitsOfMeasureService } from './units-of-measure.service';
import { UnitsOfMeasure } from './units-of-measure.entity';

@Controller('units-of-measure')
export class UnitsOfMeasureController {
  constructor(private readonly service: UnitsOfMeasureService) {}

  @Get()
  findAll(): Promise<UnitsOfMeasure[]> {
    return this.service.findAll();
  }

  @Get(':ID')
  findOne(@Param('ID') ID: number): Promise<UnitsOfMeasure> {
    return this.service.findOne(ID);
  }

  @Post()
  create(@Body() data: Partial<UnitsOfMeasure>): Promise<UnitsOfMeasure> {
    return this.service.create(data);
  }

  @Put(':ID')
  update(
    @Param('ID') ID: number,
    @Body() data: Partial<UnitsOfMeasure>,
  ): Promise<UnitsOfMeasure> {
    return this.service.update(ID, data);
  }

  @Delete(':ID')
  remove(@Param('ID') ID: number): Promise<void> {
    return this.service.remove(ID);
  }
}
