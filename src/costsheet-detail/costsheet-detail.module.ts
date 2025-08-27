import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CostsheetDetail } from './costsheet-detail.entity';
import { CostsheetDetailService } from './costsheet-detail.service';
import { CostsheetDetailController } from './costsheet-detail.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CostsheetDetail])],
  providers: [CostsheetDetailService],
  controllers: [CostsheetDetailController],
})
export class CostsheetDetailModule {}
