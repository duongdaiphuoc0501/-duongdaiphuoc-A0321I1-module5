import {Customer_Type} from "./Customer_Type";

export interface Customer{
  id: number;
  customerName: string;
  customerBirthday: string;
  gender: number;
  customerIdCard: string;
  customerPhone: string;
  customerAddress?: string;
  customer_type: Customer_Type;
}
