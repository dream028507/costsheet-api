import { Injectable } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { CostsheetDetail } from './costsheet-detail.entity';

@Injectable()
export class CostsheetDetailService {
  constructor(
    @InjectRepository(CostsheetDetail)
    private readonly costsheetDetailRepository: Repository<CostsheetDetail>,
    // Use default connection which points to DB_NAME (Costsheet_ONS_V2)
    @InjectDataSource()
    private readonly defaultDataSource: DataSource,
  ) {}

  findAll(): Promise<CostsheetDetail[]> {
    return this.costsheetDetailRepository.find();
  }

  findOne(id: number): Promise<CostsheetDetail> {
    return this.costsheetDetailRepository.findOne({
      where: { id },
    }) as Promise<CostsheetDetail>;
  }

  create(data: Partial<CostsheetDetail>): Promise<CostsheetDetail> {
    const entity = this.costsheetDetailRepository.create(data);
    return this.costsheetDetailRepository.save(entity);
  }

  update(id: number, data: Partial<CostsheetDetail>): Promise<CostsheetDetail> {
    return this.costsheetDetailRepository.save({ ...data, id });
  }

  async remove(id: number): Promise<void> {
    await this.costsheetDetailRepository.delete(id);
  }

  // Returns columns metadata for a given table in the costsheet DB
  async getTableColumns(tableName = 'CostsheetDetail', schema = 'dbo') {
    const rows = await this.defaultDataSource.query(
      `SELECT COLUMN_NAME as name,
              DATA_TYPE as dataType,
              CHARACTER_MAXIMUM_LENGTH as maxLength,
              IS_NULLABLE as isNullable,
              NUMERIC_PRECISION as numericPrecision,
              NUMERIC_SCALE as numericScale
       FROM INFORMATION_SCHEMA.COLUMNS
       WHERE TABLE_NAME = @0 AND TABLE_SCHEMA = @1
       ORDER BY ORDINAL_POSITION`,
      [tableName, schema],
    );

    return {
      table: tableName,
      schema,
      count: rows.length,
      columns: rows,
    } as const;
  }
}
