import {Component, OnInit} from '@angular/core';
import {CustomerServiceService} from "../customer-service.service";
import {Customer} from "../model/customer";
import {FormBuilder, FormGroup} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {DeleteCustomerComponent} from "../delete-customer/delete-customer.component";



@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.scss']
})
export class ListCustomerComponent implements OnInit {
  customerList: Customer[];
  p = 1;
  formSearch: FormGroup;

  constructor(private customerService: CustomerServiceService,
              private fb: FormBuilder,
              private matDialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.createForm();
    this.customerService.getAllCustomer().subscribe(
      data => {
        this.customerList = data;
        console.log(this.customerList);
      }
    );
  }

  search() {
    this.customerService.searchCustomer(this.formSearch.value).subscribe(
      data => {
        this.p = 1;
        this.customerList = data;
      }
    );
  }

  createForm() {
    this.formSearch = this.fb.group({
      name: [''],
      email: [''],
      customerType: ['']
    });
  }

  openDialogDelete(id: number, name: string) {
    const dialogDelete = this.matDialog.open(DeleteCustomerComponent, {
      data: {id: id, name: name},
      height: '100px',
      width: '500px'
    });
    dialogDelete.afterClosed().subscribe(() => {
    });
  }
}
