import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'ItemsMast' })
export class ItemsMast {
  @PrimaryColumn({ type: 'int' })
  ID: number;
  @Column({ type: 'nvarchar', length: 255, nullable: true })
  Inactive: string;
  @Column({ type: 'nvarchar', length: 255, nullable: true })
  Item_Code: string;
  @Column({ type: 'nvarchar', length: 255, nullable: true })
  UPC_Code: string;
  @Column({ type: 'nvarchar', length: 255, nullable: true })
  Name: string;
  @Column({ type: 'nvarchar', length: 255, nullable: true })
  Display_Name: string;
  @Column({ type: 'nvarchar', length: 255, nullable: true })
  Type: string;
  @Column({ type: 'nvarchar', length: 255, nullable: true })
  Item_Type: string;
  @Column({ type: 'nvarchar', length: 255, nullable: true })
  SubType: string;
  @Column({ type: 'nvarchar', length: 255, nullable: true })
  Description: string;
  @Column({ type: 'nvarchar', length: 255, nullable: true })
  Purchase_Description: string;
  @Column({ type: 'nvarchar', length: 255, nullable: true })
  Vendor_Name: string;
  @Column({ type: 'nvarchar', length: 255, nullable: true })
  Store_Display_Name: string;
  @Column({ type: 'nvarchar', length: 255, nullable: true })
  Store_Description: string;
  @Column({ type: 'nvarchar', length: 255, nullable: true })
  Primary_Units_Type: string;
  @Column({ type: 'nvarchar', length: 255, nullable: true })
  Primary_Stock_Unit: string;
  @Column({ type: 'nvarchar', length: 255, nullable: true })
  Primary_Purchase_Unit: string;
  @Column({ type: 'nvarchar', length: 255, nullable: true })
  Primary_Sale_Unit: string;
  @Column({ type: 'nvarchar', length: 255, nullable: true })
  Display_in_Web_Site: string;
  @Column({ type: 'nvarchar', length: 255, nullable: true })
  Purchase_Price: string;
  @Column({ type: 'nvarchar', length: 255, nullable: true })
  Preferred_Vendor: string;
  @Column({ type: 'decimal', precision: 18, scale: 2, nullable: true })
  Base_Price: number;
  @Column({ type: 'nvarchar', length: 255, nullable: true })
  Alternate_Price_1: string;
  @Column({ type: 'nvarchar', length: 255, nullable: true })
  Alternate_Price_2: string;
  @Column({ type: 'nvarchar', length: 255, nullable: true })
  Alternate_Price_3: string;
  @Column({ type: 'nvarchar', length: 255, nullable: true })
  Custom_Costsheet: string;
  @Column({ type: 'nvarchar', length: 255, nullable: true })
  Internal_Sale: string;
  @Column({ type: 'nvarchar', length: 255, nullable: true })
  MSRP: string;
  @Column({ type: 'nvarchar', length: 255, nullable: true })
  Online_Price: string;
  @Column({ type: 'nvarchar', length: 255, nullable: true })
  Income_Account: string;
  @Column({ type: 'nvarchar', length: 255, nullable: true })
  Asset_Account: string;
  @Column({ type: 'nvarchar', length: 255, nullable: true })
  Expense_COGS_Account: string;
  @Column({ type: 'nvarchar', length: 255, nullable: true })
  Deferred_Revenue_Account: string;
  @Column({ type: 'nvarchar', length: 255, nullable: true })
  Default_as_Delivered: string;
  @Column({ type: 'nvarchar', length: 255, nullable: true })
  Permit_Discount: string;
  @Column({ type: 'nvarchar', length: 255, nullable: true })
  VSOE_Price: string;
  @Column({ type: 'nvarchar', length: 255, nullable: true })
  Costing_Method: string;
  @Column({ type: 'nvarchar', length: 255, nullable: true })
  On_Special: string;
  @Column({ type: 'nvarchar', length: 255, nullable: true })
  Tax_Schedule: string;
  @Column({ type: 'nvarchar', length: 255, nullable: true })
  Weight: string;
  @Column({ type: 'nvarchar', length: 255, nullable: true })
  Weight_Units: string;
  @Column({ type: 'nvarchar', length: 255, nullable: true })
  Class: string;
  @Column({ type: 'nvarchar', length: 255, nullable: true })
  Department: string;
  @Column({ type: 'datetime', nullable: true })
  Date_Created: Date;
  @Column({ type: 'datetime', nullable: true })
  Last_Modified: Date;
  @Column({ type: 'nvarchar', length: 255, nullable: true })
  Default_WT_Code: string;
  @Column({ type: 'nvarchar', length: 255, nullable: true })
  Item_Catgeory_1: string;
  @Column({ type: 'nvarchar', length: 255, nullable: true })
  Item_Category_3: string;
  @Column({ type: 'nvarchar', length: 255, nullable: true })
  Company_Branch: string;
  @Column({ type: 'nvarchar', length: 255, nullable: true })
  Bank_File_Format: string;
  @Column({ type: 'nvarchar', length: 255, nullable: true })
  Sub_Cost_Center: string;
  @Column({ type: 'nvarchar', length: 255, nullable: true })
  Organization_Department: string;
  @Column({ type: 'nvarchar', length: 255, nullable: true })
  Main_Item: string;
  @Column({ type: 'nvarchar', length: 50, nullable: true })
  group: string;
  @Column({ type: 'decimal', precision: 18, scale: 2, nullable: true })
  standard_cost: number;
  @Column({ type: 'nvarchar', length: 255, nullable: true })
  item_Category_2: string;
  @Column({ type: 'int', nullable: true })
  Vendor_ID: number;
}
