import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'TaxCodes' })
export class TaxCodes {
  @PrimaryColumn({ type: 'int' })
  ID: number;

  @Column({ type: 'nvarchar', length: 255, nullable: true })
  Name: string;

  @Column({ type: 'nvarchar', length: 255, nullable: true })
  Description: string;

  @Column({ type: 'nvarchar', length: 255, nullable: true })
  Country: string;

  @Column({ type: 'nvarchar', length: 255, nullable: true })
  Rate: string;

  @Column({ type: 'nvarchar', length: 255, nullable: true })
  City: string;

  @Column({ type: 'nvarchar', length: 255, nullable: true })
  County: string;

  @Column({ type: 'nvarchar', length: 255, nullable: true })
  State_Province_County: string;

  @Column({ type: 'nvarchar', length: 255, nullable: true })
  VAT_Category_ThaiTax: string;

  @Column({ type: 'nvarchar', length: 255, nullable: true })
  Exempt_ThaiTax: string;

  @Column({ type: 'nvarchar', length: 255, nullable: true })
  VAT_Type_ThaiTax: string;

  @Column({ type: 'nvarchar', length: 255, nullable: true })
  VAT_Undue_Contra_ThaiTax: string;

  @Column({ type: 'nvarchar', length: 255, nullable: true })
  Export_ThaiTax: string;

  @Column({ type: 'nvarchar', length: 255, nullable: true })
  Exclude_from_VAT_Reports_ThaiTax: string;

  @Column({ type: 'nvarchar', length: 255, nullable: true })
  Sales_VAT_Undue_Offset_Account_ThaiTax: string;

  @Column({ type: 'nvarchar', length: 255, nullable: true })
  Purchase_VAT_Undue_Offset_Account_ThaiTax: string;

  @Column({ type: 'nvarchar', length: 255, nullable: true })
  Penalty_Account_ThaiTax: string;

  @Column({ type: 'nvarchar', length: 255, nullable: true })
  Surcharge_Account_ThaiTax: string;
}
