import { Controller, Get, Query } from '@nestjs/common';
import { ContractMastService } from './contract-mast.service';

@Controller('contract-mast')
export class ContractMastController {
  constructor(private readonly service: ContractMastService) {}

  @Get()
  findAll(@Query('contractNo') contractNo?: string) {
    if (contractNo) {
      return this.service.findByContractNo(contractNo);
    }
    return this.service.findAll();
  }
}
