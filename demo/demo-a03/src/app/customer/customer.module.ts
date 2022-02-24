import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import {CustomerServiceService} from "./customer-service.service";
import { ListCustomerComponent } from './list-customer/list-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';

import {ReactiveFormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {DeleteCustomerComponent} from './delete-customer/delete-customer.component';



@NgModule({
  declarations: [ListCustomerComponent, EditCustomerComponent, DeleteCustomerComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    MatDialogModule,
    MatButtonModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [CustomerServiceService]
})
export class CustomerModule {

}
