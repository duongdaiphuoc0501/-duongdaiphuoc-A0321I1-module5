import {Component, Inject, OnInit} from '@angular/core';

import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {CustomerServiceService} from '../customer-service.service';


@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.scss']
})
export class DeleteCustomerComponent implements OnInit {
  id: number;
  name: string;

  constructor(@Inject(MAT_DIALOG_DATA) data: any,
              private matDialogRef: MatDialogRef<DeleteCustomerComponent>,
              private matDialog: MatDialog,
              private customerService: CustomerServiceService) {
    this.id = data.id;
    this.name = data.name;
  }

  ngOnInit(): void {
  }


  deleteCustomer() {
    this.customerService.deleteCustomer(this.id).subscribe();
  }
}
