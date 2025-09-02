import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'TaxCodes' })
export class TaxCodes {
  @PrimaryColumn({ type: 'int' })
  ID: number;
  @Column({ type: 'nvarchar', length: 255, nullable: true })
  Name: string;
}
