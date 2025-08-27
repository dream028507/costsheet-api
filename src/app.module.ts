import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CostsheetDetailModule } from './costsheet-detail/costsheet-detail.module';
import { CostSheetMastModule } from './costsheet-mast/costsheet-mast.module';
import { OracleInterfaceModule } from './oracle-interface/oracle-interface.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'mssql',
        host: config.get<string>('DB_HOST'),
        port: parseInt(config.get<string>('DB_PORT') ?? '1433', 10),
        username: config.get<string>('DB_USER'),
        password: config.get<string>('DB_PASSWORD'),
        database: config.get<string>('DB_NAME'),
        autoLoadEntities: true,
        synchronize: config.get<string>('DB_SYNCHRONIZE') === 'true',
        options: {
          enableArithAbort: true,
        },
        extra: {
          trustServerCertificate: true, // useful for local/dev
        },
      }),
    }),
    TypeOrmModule.forRootAsync({
      name: 'costsheetConnection',
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'mssql',
        host: config.get<string>('COSTSHEET_DB_HOST'),
        port: parseInt(config.get<string>('COSTSHEET_DB_PORT') ?? '1433', 10),
        username: config.get<string>('COSTSHEET_DB_USER'),
        password: config.get<string>('COSTSHEET_DB_PASSWORD'),
        database: config.get<string>('COSTSHEET_DB_NAME'),
        autoLoadEntities: true,
        synchronize: config.get<string>('COSTSHEET_DB_SYNCHRONIZE') === 'true',
        options: {
          enableArithAbort: true,
        },
        extra: {
          trustServerCertificate: true,
        },
      }),
    }),
    TypeOrmModule.forRootAsync({
      name: 'oracleInterfaceConnection',
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'mssql',
        host: config.get<string>('ORACLE_DB_HOST'),
        port: parseInt(config.get<string>('ORACLE_DB_PORT') ?? '1433', 10),
        username: config.get<string>('ORACLE_DB_USER'),
        password: config.get<string>('ORACLE_DB_PASSWORD'),
        database: config.get<string>('ORACLE_DB_NAME'),
        autoLoadEntities: true,
        synchronize: config.get<string>('ORACLE_DB_SYNCHRONIZE') === 'true',
        options: {
          enableArithAbort: true,
        },
        extra: {
          trustServerCertificate: true,
        },
      }),
    }),
  CostsheetDetailModule,
  CostSheetMastModule,
  OracleInterfaceModule,
  ],
})
export class AppModule {}
