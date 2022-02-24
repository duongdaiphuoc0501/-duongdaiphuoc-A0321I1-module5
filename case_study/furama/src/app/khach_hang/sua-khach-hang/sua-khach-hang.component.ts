import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Customer} from "../../model/Customer";
import {KhachHangService} from "../../service/khach-hang.service";
import {ActivatedRoute, Router} from "@angular/router";
import {LoaiKhachService} from "../../service/loai-khach.service";
import {Customer_Type} from "../../model/Customer_Type";

@Component({
  selector: 'app-sua-khach-hang',
  templateUrl: './sua-khach-hang.component.html',
  styleUrls: ['./sua-khach-hang.component.css']
})
export class SuaKhachHangComponent implements OnInit {
  public formEditCustomer: FormGroup
  public customerTypes: Customer_Type[];

  public customerOfId;

  constructor(public _formBuilder: FormBuilder,
              public _customerService: KhachHangService,
              private _customerTypeService: LoaiKhachService,
              public _router: Router,
              public _activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this._customerTypeService.getAllCustomerType().subscribe(data => {
      this.customerTypes = data;
      console.log(data);
    }, error => {
      console.log('Failed to get list customer type!');
    });

    this.formEditCustomer = this._formBuilder.group({
      customerName: ['', [Validators.required]],
      customerBirthday: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      customerIdCard: ['', [Validators.required]],
      customerPhone: ['', [Validators.required]],
      customerAddress: ['', [Validators.required]],
      customer_type: ['',[Validators.required]]
    })

    this._activatedRoute.params.subscribe(data => {
      this.customerOfId = data.id;
      this._customerService.findById(this.customerOfId).subscribe(data => {
        console.log(data);
        this.formEditCustomer.patchValue(data);
      })
    })
  }

  editCustomer() {
    this._customerService.edit(this.formEditCustomer.value, this.customerOfId).subscribe(data => {
      this._router.navigateByUrl('customer');
      console.log(this.formEditCustomer.value);
    })
  }


  compareFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }
}
