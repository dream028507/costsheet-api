import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'CostsheetInternalDepartment' })
export class CostsheetInternalDepartment {
  @PrimaryGeneratedColumn({ type: 'int', name: 'ID' })
  ID: number;

  @Column({ type: 'nvarchar', length: 255, nullable: true })
  Name: string;

  @Column({ type: 'nvarchar', length: 50, nullable: true })
  subsidiary: string;
}
