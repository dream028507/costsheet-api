import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'CostsheetDetail' })
export class CostsheetDetail {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  costsheetMast_id: number;

  @Column({ nullable: true, type: 'nvarchar', length: 255 })
  costsheetNo: string;

  @Column({ nullable: true, type: 'nvarchar', length: 255 })
  itemNo: string;

  @Column({ nullable: true })
  item_id: number;

  @Column({ nullable: true, type: 'nvarchar', length: 255 })
  itemName: string;

  @Column({ nullable: true, type: 'nvarchar', length: 'max' })
  itemDescr: string;

  @Column({ nullable: true, type: 'nvarchar', length: 255 })
  itemGroup: string;

  @Column({ nullable: true, type: 'nvarchar', length: 255 })
  itemCategories1: string;

  @Column({ nullable: true, type: 'nvarchar', length: 255 })
  currency: string;

  @Column({ nullable: true })
  currency_id: number;

  @Column({ nullable: true, type: 'decimal', precision: 10, scale: 4 })
  exchangeRate: number;

  @Column({ nullable: true, type: 'decimal', precision: 18, scale: 2 })
  basedQTY: number;

  @Column({ nullable: true, type: 'decimal', precision: 18, scale: 2 })
  factor: number;

  @Column({ nullable: true, type: 'decimal', precision: 18, scale: 2 })
  QTY: number;

  @Column({ nullable: true, type: 'nvarchar', length: 255 })
  unitMeasure: string;

  @Column({ nullable: true })
  unitMeasure_id: number;

  @Column({ nullable: true })
  QTYCalPrice: number;

  @Column({ nullable: true, type: 'varchar', length: 255 })
  PriceLevel: string;

  @Column({ nullable: true })
  PriceLevel_id: number;

  @Column({ nullable: true, type: 'decimal', precision: 18, scale: 2 })
  unitSalePrice: number;

  @Column({ nullable: true, type: 'decimal', precision: 18, scale: 2 })
  discount: number;

  @Column({ nullable: true, type: 'decimal', precision: 18, scale: 2 })
  discountAmt: number;

  @Column({ nullable: true, type: 'decimal', precision: 18, scale: 2 })
  rate: number;

  @Column({ nullable: true, type: 'nvarchar', length: 50 })
  vatCode: string;

  @Column({ nullable: true })
  vatCode_id: number;

  @Column({ nullable: true, type: 'decimal', precision: 18, scale: 2 })
  totalSalePrice: number;

  @Column({ nullable: true, type: 'decimal', precision: 18, scale: 2 })
  projectWarrantyMonth: number;

  @Column({ nullable: true, type: 'decimal', precision: 18, scale: 2 })
  vendorWarrantyMonth: number;

  @Column({ nullable: true, type: 'decimal', precision: 18, scale: 2 })
  unitCostPrice: number;

  @Column({ nullable: true, type: 'decimal', precision: 18, scale: 2 })
  totalUnitCostPrice: number;

  @Column({ nullable: true, type: 'decimal', precision: 18, scale: 2 })
  unitCostPriceForCalCost: number;

  @Column({ nullable: true, type: 'decimal', precision: 18, scale: 2 })
  totalCostPriceForCalCost: number;

  @Column({ nullable: true, type: 'nvarchar', length: 255 })
  refCostshLine: string;

  @Column({ nullable: true, type: 'nvarchar', length: 255 })
  refCostshItem: string;

  @Column({ nullable: true, type: 'nvarchar', length: 255 })
  vendor: string;

  @Column({ nullable: true })
  vendor_id: number;

  @Column({ nullable: true, type: 'nvarchar', length: 255 })
  department: string;

  @Column({ nullable: true })
  department_id: number;

  @Column({ nullable: true, type: 'nvarchar', length: 255 })
  refSalesNo: string;

  @Column({ nullable: true, type: 'nvarchar', length: 255 })
  refSalesLineNo: string;

  @Column({ nullable: true, type: 'nvarchar', length: 255 })
  refPRNo: string;

  @Column({ nullable: true, type: 'nvarchar', length: 255 })
  remark: string;

  @Column({ nullable: true, type: 'date' })
  startDateRev: Date;

  @Column({ nullable: true, type: 'date' })
  endDateRev: Date;

  @Column({ nullable: true, type: 'date' })
  orgStartDate: Date;

  @Column({ nullable: true, type: 'date' })
  orgEndDate: Date;

  @Column({ nullable: true, type: 'date' })
  calStartDate: Date;

  @Column({ nullable: true, type: 'date' })
  calEndDate: Date;

  @Column({ nullable: true, type: 'bit' })
  warranty: boolean;

  @Column({ nullable: true, type: 'bit' })
  showPrint: boolean;

  @Column({ nullable: true, type: 'bit' })
  close: boolean;

  @Column({ nullable: true, type: 'bit' })
  createRP: boolean;

  @Column({ nullable: true, type: 'bit' })
  fullyPO: boolean;

  @Column({ nullable: true, type: 'nvarchar', length: 255 })
  itemKitKey: string;

  @Column({ nullable: true, type: 'varchar', length: 255 })
  unitType: string;

  @Column({ nullable: true })
  unitType_id: number;

  @Column({ nullable: true, type: 'bit' })
  spare: boolean;

  @Column({ nullable: true, type: 'nvarchar', length: 255 })
  partNo: string;

  @Column({ nullable: true, type: 'nvarchar', length: 255 })
  input_method: string;

  @Column({ nullable: true, type: 'datetime' })
  create_date: Date;

  @Column({ nullable: true, type: 'nvarchar', length: 50 })
  create_by: string;

  @Column({ nullable: true, type: 'nvarchar', length: 255 })
  create_by_FullName: string;

  @Column({ nullable: true, type: 'datetime' })
  update_date: Date;

  @Column({ nullable: true, type: 'nvarchar', length: 50 })
  update_by: string;

  @Column({ nullable: true, type: 'nvarchar', length: 255 })
  update_by_FullName: string;

  @Column({ nullable: true, type: 'nvarchar', length: 255 })
  unitID: string;

  @Column({ nullable: true, type: 'nvarchar', length: 10 })
  approved: string;

  @Column({ nullable: true, type: 'nvarchar', length: 10 })
  cdgs_psd: string;
}
