import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'CurrencyExchangeRates' })
export class CurrencyExchangeRates {
  @PrimaryColumn({ type: 'nvarchar', length: 255 })
  Base_Currency: string;

  @PrimaryColumn({ type: 'nvarchar', length: 255 })
  Source_Currency: string;

  @Column({ type: 'decimal', precision: 18, scale: 2, nullable: true })
  Exchange_Rate: number;

  @Column({ type: 'datetime', nullable: true })
  Effective_Date: Date;
}
