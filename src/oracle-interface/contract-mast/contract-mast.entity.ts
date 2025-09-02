import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'ContractMast' })
export class ContractMast {
  @PrimaryColumn({ type: 'int' })
  id: number;

  @Column({ type: 'nvarchar', length: 255, nullable: true })
  company: string;

  @Column({ type: 'nvarchar', length: 255, nullable: true })
  contractNo: string;

  @Column({ type: 'nvarchar', length: 'MAX', nullable: true })
  projectName: string;

  @Column({ type: 'nvarchar', length: 'MAX', nullable: true })
  projectNameDescr: string;

  @Column({ type: 'nvarchar', length: 255, nullable: true })
  projectType: string;

  @Column({ type: 'nvarchar', length: 255, nullable: true })
  contractType: string;

  @Column({ type: 'nvarchar', length: 255, nullable: true })
  contractYear: string;

  @Column({ type: 'nvarchar', length: 255, nullable: true })
  preContractNo: string;

  @Column({ type: 'nvarchar', length: 255, nullable: true })
  status: string;

  @Column({ type: 'decimal', precision: 18, scale: 2, nullable: true })
  estCost: number;

  @Column({ type: 'decimal', precision: 18, scale: 2, nullable: true })
  estRevenue: number;

  @Column({ type: 'date', nullable: true })
  startDate: Date;

  @Column({ type: 'date', nullable: true })
  endDate: Date;

  @Column({ type: 'date', nullable: true })
  entryDate: Date;

  @Column({ type: 'date', nullable: true })
  signDate: Date;

  @Column({ type: 'date', nullable: true })
  expectAccptDate: Date;

  @Column({ type: 'date', nullable: true })
  expectInstallDate: Date;

  @Column({ type: 'date', nullable: true })
  estStartWaranty: Date;

  @Column({ type: 'date', nullable: true })
  estEndWaranty: Date;

  @Column({ type: 'nvarchar', length: 255, nullable: true })
  payerID: string;

  @Column({ type: 'nvarchar', length: 255, nullable: true })
  payerName: string;

  @Column({ type: 'nvarchar', length: 255, nullable: true })
  endCustomerID: string;

  @Column({ type: 'nvarchar', length: 255, nullable: true })
  endCustomerName: string;

  @Column({ type: 'nvarchar', length: 255, nullable: true })
  contactPoint: string;

  @Column({ type: 'nvarchar', length: 255, nullable: true })
  projMgrID: string;

  @Column({ type: 'nvarchar', length: 255, nullable: true })
  mainSalesID: string;

  @Column({ type: 'nvarchar', length: 255, nullable: true })
  secondSalesID: string;

  @Column({ type: 'nvarchar', length: 255, nullable: true })
  class: string;

  @Column({ type: 'nvarchar', length: 255, nullable: true })
  department: string;

  @Column({ type: 'nvarchar', length: 255, nullable: true })
  organizeDept: string;

  @Column({ type: 'bit', nullable: true })
  isinactive: boolean;

  @Column({ type: 'nvarchar', length: 255, nullable: true })
  projMgrName: string;

  @Column({ type: 'nvarchar', length: 255, nullable: true })
  mainSalesName: string;

  @Column({ type: 'nvarchar', length: 255, nullable: true })
  mainSalesRatio: string;

  @Column({ type: 'nvarchar', length: 255, nullable: true })
  secondSalesName: string;

  @Column({ type: 'nvarchar', length: 255, nullable: true })
  secondSalesRatio: string;

  @Column({ type: 'nvarchar', length: 50, nullable: true })
  subsidiary: string;

  @Column({ type: 'nvarchar', length: 50, nullable: true })
  target_contract: string;
}
