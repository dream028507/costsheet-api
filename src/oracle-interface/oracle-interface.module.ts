import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemsMast } from './items-mast/items-mast.entity';
import { TaxCodes } from './tax-codes/tax-codes.entity';
import { UnitsOfMeasure } from './units-of-measure/units-of-measure.entity';
import { ItemsMastService } from './items-mast/items-mast.service';
import { TaxCodesService } from './tax-codes/tax-codes.service';
import { UnitsOfMeasureService } from './units-of-measure/units-of-measure.service';
import { ContractMastViewController } from './contract-mast-view/contract-mast-view.controller';
import { ItemsMastController } from './items-mast/items-mast.controller';
import { TaxCodesController } from './tax-codes/tax-codes.controller';
import { UnitsOfMeasureController } from './units-of-measure/units-of-measure.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature(
      [ItemsMast, TaxCodes, UnitsOfMeasure],
      'oracleInterfaceConnection',
    ),
  ],
  providers: [ItemsMastService, TaxCodesService, UnitsOfMeasureService],
  controllers: [
    ItemsMastController,
    TaxCodesController,
    UnitsOfMeasureController,
    ContractMastViewController,
  ],
})
export class OracleInterfaceModule {}
