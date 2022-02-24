import { Component, OnInit } from '@angular/core';
// tslint:disable-next-line:import-spacing
import  {Customer} from '../../model/Customer';
import {KhachHangService} from "../../service/khach-hang.service";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {Customer_Type} from "../../model/Customer_Type";
import {LoaiKhachService} from "../../service/loai-khach.service";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-danh-sach-khach-hang',
  templateUrl: './danh-sach-khach-hang.component.html',
  styleUrls: ['./danh-sach-khach-hang.component.css']
})
export class DanhSachKhachHangComponent implements OnInit {

  formSearch: FormGroup;

  customer: Customer | undefined;
  customers: Customer[];
  public customerTypes!: Customer_Type[];

  public page = 1;
  public searchValue!:string;
  public name!:string;
  public id!:number;

  constructor(private _customerService: KhachHangService,
              private _router: Router,
              private _customerTypeService: LoaiKhachService,
              private _formBuilder: FormBuilder,
              private _activeRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.createForm();
    this._customerTypeService.getAllCustomerType().subscribe(
      data => {
        this.customerTypes = data;
        console.log(data);
      }, error => {
        console.log("Lấy dữ liệu thất bại!")
      });

    this._customerService.getAllCustomer().subscribe(data => {
      this.customers = data;
    })
  }

  search() {
    this._customerService.search4Way(this.formSearch.value).subscribe(
      data => {
        this.page = 1;
        this.customers = data;
      }
    );
  }

  createForm() {
    this.formSearch = this._formBuilder.group({
      customerName: [''],
      customer_type: ['']
    });
  }

  deleteCus(id:number){
    this._customerService.delete(id).subscribe(data=>{
      this._router.navigateByUrl('customer');
      this.ngOnInit();
      this.page=1;
    })
  }
  getCustomerName(id: number) {
    this._customerService.findById(id).subscribe(data=>{
      this.name=data.name;
      this.id=data.id;
    });
  }

  compareFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }
}
