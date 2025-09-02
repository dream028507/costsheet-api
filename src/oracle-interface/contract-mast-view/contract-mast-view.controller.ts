import {
  Controller,
  DefaultValuePipe,
  Get,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { InjectConnection } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

type CountRow = { total: number };
type ViewRow = Record<string, unknown>; // TODO: ระบุ interface ที่ชัดเจนตาม schema ของ view

@Controller('contract-mast-view')
export class ContractMastViewController {
  constructor(
    // NOTE: ปรับชื่อ token ให้ตรงโปรเจกต์จริง หากเป็น MSSQL อาจใช้ 'mssqlConnection'
    @InjectConnection('oracleInterfaceConnection')
    private readonly connection: Connection,
  ) {}

  // helper: query พร้อม type ที่คาดหวัง (ลดปัญหา no-unsafe-* และ assertion เกินจำเป็น)
  private async typedQuery<T>(
    sql: string,
    params?: unknown[],
  ): Promise<T[]> {
    const result = await this.connection.query(sql, params);
    return result as T[];
  }

  @Get()
  async getViewData(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('keyword') keyword?: string,
  ): Promise<{
    status: 'success' | 'error';
    data?: ViewRow[];
    total?: number;
    page?: number;
    limit?: number;
    message?: string;
  }> {
    try {
      const MAX_LIMIT = 100;

      const pageNum = Math.max(1, Number.isFinite(page) ? page : 1);
      const limitNum = Math.min(
        Math.max(1, Number.isFinite(limit) ? limit : 10),
        MAX_LIMIT,
      );

      // ROW_NUMBER() เริ่มที่ 1
      const startRow = (pageNum - 1) * limitNum + 1;
      const endRow = pageNum * limitNum;

      // keyword
      const normalizedKeyword = (keyword ?? '').trim();
      const hasKeyword = normalizedKeyword.length > 0;
      
      let whereSql = '';
      if (hasKeyword) {
        const safeKeyword = normalizedKeyword.replace(/'/g, "''");
        whereSql = `WHERE (contractNo LIKE '%${safeKeyword}%' OR costsheetCode LIKE '%${safeKeyword}%')`;
      }

      // 1) นับ total ก่อน
      const countSql = `
        SELECT COUNT(*) AS total
        FROM dbo.v_contractMastNewEdit
        ${whereSql}
      `;

      const countRows = await this.typedQuery<CountRow>(countSql);
      const total: number =
        countRows.length > 0 ? Number(countRows[0].total ?? 0) : 0;

      // 2) พยายามใช้ ROW_NUMBER() เป็นหลัก
      const dataSqlRowNumber = `
        WITH src AS (
          SELECT
            *,
            ROW_NUMBER() OVER (ORDER BY contractNo) AS rn
          FROM dbo.v_contractMastNewEdit
          ${whereSql}
        )
        SELECT *
        FROM src
        WHERE rn BETWEEN ${startRow} AND ${endRow}
        ORDER BY rn
      `;

      let rows: ViewRow[] = [];

      try {
        rows = await this.typedQuery<ViewRow>(dataSqlRowNumber);
      } catch {
        // 3) Fallback: ใช้ TOP(endRow) แล้ว slice ฝั่ง Node
        const safeEndRow = Math.max(1, endRow);
        const dataSqlTop = `
          SELECT TOP (${safeEndRow}) *
          FROM dbo.v_contractMastNewEdit
          ${whereSql}
          ORDER BY contractNo
        `;

        const topRows = await this.typedQuery<ViewRow>(dataSqlTop);

        const startIdx = Math.max(0, startRow - 1);
        rows = topRows.slice(startIdx, safeEndRow);
      }

      return {
        status: 'success',
        data: rows,
        total,
        page: pageNum,
        limit: limitNum,
      };
    } catch (error) {
      const errMsg = (error as Error)?.message || 'Unknown error';

      return {
        status: 'error',
        message: errMsg,
      };
    }
  }
}
