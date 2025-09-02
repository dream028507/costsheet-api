import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemsMast } from './items-mast/items-mast.entity';
import { TaxCodes } from './tax-codes/tax-codes.entity';
import { UnitsOfMeasure } from './units-of-measure/units-of-measure.entity';
import { VendorsMast } from './vendors-mast/vendors-mast.entity';
import { CurrencyExchangeRates } from './currency-exchange-rates/currency-exchange-rates.entity';
import { ContractMast } from './contract-mast/contract-mast.entity';
import { PriceLevel } from './price-level/price-level.entity';
import { ItemsMastService } from './items-mast/items-mast.service';
import { TaxCodesService } from './tax-codes/tax-codes.service';
import { UnitsOfMeasureService } from './units-of-measure/units-of-measure.service';
import { VendorsMastService } from './vendors-mast/vendors-mast.service';
import { CurrencyExchangeRatesService } from './currency-exchange-rates/currency-exchange-rates.service';
import { ContractMastService } from './contract-mast/contract-mast.service';
import { PriceLevelService } from './price-level/price-level.service';
import { ContractMastViewController } from './contract-mast-view/contract-mast-view.controller';
import { CostsheetInternalDepartmentModule } from './costsheet-internal-department/costsheet-internal-department.module';
import { ItemsMastController } from './items-mast/items-mast.controller';
import { TaxCodesController } from './tax-codes/tax-codes.controller';
import { UnitsOfMeasureController } from './units-of-measure/units-of-measure.controller';
import { VendorsMastController } from './vendors-mast/vendors-mast.controller';
import { CurrencyExchangeRatesController } from './currency-exchange-rates/currency-exchange-rates.controller';
import { ContractMastController } from './contract-mast/contract-mast.controller';
import { PriceLevelController } from './price-level/price-level.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature(
      [
        ItemsMast,
        TaxCodes,
        UnitsOfMeasure,
        VendorsMast,
        CurrencyExchangeRates,
        ContractMast,
        PriceLevel,
      ],
      'oracleInterfaceConnection',
    ),
    CostsheetInternalDepartmentModule,
  ],
  providers: [
    ItemsMastService,
    TaxCodesService,
    UnitsOfMeasureService,
    VendorsMastService,
    CurrencyExchangeRatesService,
    ContractMastService,
    PriceLevelService,
  ],
  controllers: [
    ItemsMastController,
    TaxCodesController,
    UnitsOfMeasureController,
    VendorsMastController,
    CurrencyExchangeRatesController,
    ContractMastController,
    PriceLevelController,
    ContractMastViewController,
  ],
})
export class OracleInterfaceModule {}
