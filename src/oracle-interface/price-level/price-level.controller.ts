import { Controller, Get } from '@nestjs/common';
import { PriceLevelService } from './price-level.service';

@Controller('price-level')
export class PriceLevelController {
  constructor(private readonly service: PriceLevelService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }
}
