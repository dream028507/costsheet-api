import { Controller, Get, Query } from '@nestjs/common';
import { InjectConnection } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

@Controller('contract-mast-view')
export class ContractMastViewController {
  constructor(
    @InjectConnection('oracleInterfaceConnection')
    private readonly connection: Connection,
  ) {}

  @Get()
  async getViewData(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
    @Query('keyword') keyword?: string,
  ): Promise<{
    status: string;
    data?: Record<string, unknown>[];
    total?: number;
    page?: number;
    limit?: number;
    message?: string;
  }> {
    try {
      const pageNum = Number(page) || 1;
      const limitNum = Number(limit) || 10;
      const offset = (pageNum - 1) * limitNum;
      let whereClause = '';
      if (keyword) {
        const safeKeyword = String(keyword).replace(/'/g, "''");
        whereClause += whereClause ? ' AND ' : ' WHERE ';
        whereClause += `(contractNo LIKE '%${safeKeyword}%' OR costsheetCode LIKE '%${safeKeyword}%')`;
      }
      let data: Record<string, unknown>[] = [];
      if (pageNum === 1) {
        data = await this.connection.query(
          `SELECT TOP ${limitNum} * FROM dbo.v_contractMastNewEdit${whereClause} ORDER BY contractNo`
        );
      } else {
        // MSSQL ไม่รองรับ OFFSET/FETCH NEXT ใน view บางเวอร์ชัน
        // ถ้าต้องการรองรับ pagination สำหรับ page > 1 ต้องใช้ ROW_NUMBER() ใน view หรือ query
        throw new Error('Pagination for page > 1 is not supported on this MSSQL version/view.');
      }
      const totalResult: Array<{ total: number }> = await this.connection.query(
        `SELECT COUNT(*) as total FROM dbo.v_contractMastNewEdit${whereClause}`
      );
      const total: number = totalResult[0]?.total || 0;
      return { status: 'success', data, total, page: pageNum, limit: limitNum };
    } catch (error) {
      const errMsg = (error as Error)?.message || 'Unknown error';
      return { status: 'error', message: errMsg };
    }
  }
}
