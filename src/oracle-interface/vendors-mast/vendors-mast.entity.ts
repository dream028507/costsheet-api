import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'VendorsMast' })
export class VendorsMast {
  @Column({ type: 'nvarchar', length: 255, nullable: true })
  Inactive: string;

  @PrimaryColumn('int')
  ID: number;

  @Column({ type: 'nvarchar', length: 255, nullable: true })
  Name: string;

  @Column({ type: 'nvarchar', length: 255, nullable: true })
  Duplicate: string;

  @Column({ type: 'nvarchar', length: 255, nullable: true })
  Category: string;

  @Column({ type: 'nvarchar', length: 255, nullable: true })
  Primary_Contact: string;

  @Column({ type: 'nvarchar', length: 255, nullable: true })
  Phone: string;

  @Column({ type: 'nvarchar', length: 255, nullable: true })
  Email: string;

  @Column({ type: 'nvarchar', length: 255, nullable: true })
  Login_Access: string;

  @Column({ type: 'nvarchar', length: 255, nullable: true })
  Vendor_Sub_category: string;

  @Column({ type: 'nvarchar', length: 255, nullable: true })
  Vendor_Head_Office: string;

  @Column({ type: 'nvarchar', length: 255, nullable: true })
  Payment_Bank_Name: string;

  @Column({ type: 'nvarchar', length: 255, nullable: true })
  Sub_Cost_Center: string;

  @Column({ type: 'nvarchar', length: 255, nullable: true })
  Reference_IS_Vendor: string;

  @Column({ type: 'nvarchar', length: 255, nullable: true })
  Currency: string;
}
