import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CostsheetInternalDepartment } from './costsheet-internal-department.entity';
import { CostsheetInternalDepartmentService } from './costsheet-internal-department.service';
import { CostsheetInternalDepartmentController } from './costsheet-internal-department.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CostsheetInternalDepartment], 'oracleInterfaceConnection')],
  providers: [CostsheetInternalDepartmentService],
  controllers: [CostsheetInternalDepartmentController],
})
export class CostsheetInternalDepartmentModule {}
