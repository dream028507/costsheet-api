import { Controller, Get } from '@nestjs/common';
import { CostsheetInternalDepartmentService } from './costsheet-internal-department.service';

@Controller('costsheet-internal-department')
export class CostsheetInternalDepartmentController {
  constructor(private readonly service: CostsheetInternalDepartmentService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }
}
