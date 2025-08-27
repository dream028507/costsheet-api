import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'UnitsOfMeasure' })
export class UnitsOfMeasure {
  @PrimaryColumn({ type: 'int' })
  ID: number;

  @Column({ type: 'nvarchar', length: 255, nullable: true })
  Name: string;

  @Column({ type: 'nvarchar', length: 255, nullable: true })
  Base_Unit: string;
}
