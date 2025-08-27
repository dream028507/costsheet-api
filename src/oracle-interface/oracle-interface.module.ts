import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemsMast } from './items-mast.entity';
import { TaxCodes } from './tax-codes.entity';
import { UnitsOfMeasure } from './units-of-measure.entity';
import { ItemsMastService } from './items-mast.service';
import { ItemsMastController } from './items-mast.controller';
import { TaxCodesService } from './tax-codes.service';
import { TaxCodesController } from './tax-codes.controller';
import { UnitsOfMeasureService } from './units-of-measure.service';
import { UnitsOfMeasureController } from './units-of-measure.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([ItemsMast, TaxCodes, UnitsOfMeasure], 'oracleInterfaceConnection'),
  ],
  providers: [
    ItemsMastService,
    TaxCodesService,
    UnitsOfMeasureService,
  ],
  controllers: [
    ItemsMastController,
    TaxCodesController,
    UnitsOfMeasureController,
  ],
})
export class OracleInterfaceModule {}
