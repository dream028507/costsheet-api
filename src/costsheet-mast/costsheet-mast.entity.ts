import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'CostSheetMast' })
export class CostSheetMast {
  @PrimaryColumn({ type: 'char', length: 3 })
  CompID: string;

  @PrimaryColumn({ type: 'char', length: 4 })
  ContYear: string;

  @PrimaryColumn({ type: 'char', length: 4 })
  ContSeq: string;

  @PrimaryColumn({ type: 'char', length: 2 })
  SheetCode: string;

  @Column({ type: 'smalldatetime', nullable: true })
  LoadDate: Date;

  @Column({ type: 'smalldatetime', nullable: true })
  CostSheetDate: Date;

  @Column({ type: 'char', length: 6, nullable: true })
  ProposeBy: string;

  @Column({ type: 'smalldatetime', nullable: true })
  ProposeDate: Date;

  @Column({ type: 'decimal', precision: 6, scale: 2, nullable: true })
  IntRatePercent: number;

  @Column({ type: 'decimal', precision: 6, scale: 2, nullable: true })
  IntPercent: number;

  @Column({ type: 'decimal', precision: 18, scale: 2, nullable: true })
  CostInterest: number;

  @Column({ type: 'decimal', precision: 18, scale: 2, nullable: true })
  CostMAInt: number;

  @Column({ type: 'decimal', precision: 6, scale: 2, nullable: true })
  VatRate: number;

  @Column({ type: 'decimal', precision: 6, scale: 2, nullable: true })
  VatPercent: number;

  @Column({ type: 'decimal', precision: 18, scale: 2, nullable: true })
  TotSaleVatAmt: number;

  @Column({ type: 'decimal', precision: 18, scale: 2, nullable: true })
  TotsaleMAVatAmt: number;

  @Column({ type: 'decimal', precision: 18, scale: 2, nullable: true })
  TotCostVatAmt: number;

  @Column({ type: 'decimal', precision: 18, scale: 2, nullable: true })
  TotCostMAvatAmt: number;

  @Column({ type: 'decimal', precision: 18, scale: 2, nullable: true })
  Budget: number;

  @Column({ type: 'decimal', precision: 18, scale: 2, nullable: true })
  OfferPrice: number;

  @Column({ type: 'decimal', precision: 18, scale: 2, nullable: true })
  OfferPrcBefVat: number;

  @Column({ type: 'decimal', precision: 18, scale: 2, nullable: true })
  ProfitBefVat: number;

  @Column({ type: 'decimal', precision: 18, scale: 2, nullable: true })
  PercOfferPrcBefVatAmt: number;

  @Column({ type: 'decimal', precision: 18, scale: 2, nullable: true })
  PercProfitBefVat: number;

  @Column({ type: 'decimal', precision: 18, scale: 2, nullable: true })
  ProfitIncVat: number;

  @Column({ type: 'decimal', precision: 18, scale: 2, nullable: true })
  PercOfferPrcIncVatAmt: number;

  @Column({ type: 'decimal', precision: 18, scale: 2, nullable: true })
  PercProfitIncVat: number;

  @Column({ type: 'decimal', precision: 18, scale: 2, nullable: true })
  ProfitExcVat: number;

  @Column({ type: 'decimal', precision: 18, scale: 2, nullable: true })
  PercOfferPrcExcVatAmt: number;

  @Column({ type: 'decimal', precision: 18, scale: 2, nullable: true })
  PercProfitExcVat: number;

  @Column({ type: 'nvarchar', length: 250, nullable: true })
  FileName: string;

  @Column({ type: 'char', length: 1, nullable: true })
  status: string;

  @Column({ type: 'int' })
  CostsheetVersion: number;

  @Column({ type: 'int', nullable: true })
  LoadVersion: number;

  @Column({ type: 'char', length: 6, nullable: true })
  UpdBy: string;

  @Column({ type: 'smalldatetime', nullable: true })
  UpdDate: Date;
}
