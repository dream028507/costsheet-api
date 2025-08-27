import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CostSheetMast } from './costsheet-mast.entity';
import { CostSheetMastService } from './costsheet-mast.service';
import { CostSheetMastController } from './costsheet-mast.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CostSheetMast], 'costsheetConnection')],
  providers: [CostSheetMastService],
  controllers: [CostSheetMastController],
})
export class CostSheetMastModule {}
