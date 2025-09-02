import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'PriceLevel' })
export class PriceLevel {
  @PrimaryColumn('int')
  ID: number;

  @Column({ type: 'nvarchar', length: 255, nullable: true })
  Name: string;

  @Column({ type: 'nvarchar', length: 255, nullable: true })
  Costsheet_Price_Level: string;

  @Column({ type: 'nvarchar', length: 255, nullable: true })
  Condition_Price_Level: string;
}
