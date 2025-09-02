import { Controller, Get } from '@nestjs/common';
import { VendorsMastService } from './vendors-mast.service';

@Controller('vendors-mast')
export class VendorsMastController {
  constructor(private readonly service: VendorsMastService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }
}
