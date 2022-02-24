import {CustomerType} from "../../../../../demo-angular/src/app/customer/list-customer/customer-type";

export interface Customer {
  id: number;
  name: string;
  birthday: string;
  email: string;
  customerType: CustomerType;
}
