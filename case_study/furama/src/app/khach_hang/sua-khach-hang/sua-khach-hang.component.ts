import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Customer} from "../../model/Customer";
import {KhachHangService} from "../../service/khach-hang.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-sua-khach-hang',
  templateUrl: './sua-khach-hang.component.html',
  styleUrls: ['./sua-khach-hang.component.css']
})
export class SuaKhachHangComponent implements OnInit {
  formEdit: FormGroup;
  customer: Customer;

  constructor(private  _formBuilder: FormBuilder,
              private _customerService: KhachHangService,
              private _activeRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.formEdit = this._formBuilder.group({
      customerName: ['', [Validators.required]],
      customerBirthday: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      customerIdCard: ['', [Validators.required]],
      customerPhone: ['', [Validators.required]],
      customerAddress: ['', [Validators.required]],
      customer_type: []
    });
  }
}
