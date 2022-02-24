import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListCustomerComponent} from "./list-customer/list-customer.component";
import {EditCustomerComponent} from "./edit-customer/edit-customer.component";


const routes: Routes = [
  {
    path: '',
    component: ListCustomerComponent
  },
  {
    path: 'edit/:id',
    component: EditCustomerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
