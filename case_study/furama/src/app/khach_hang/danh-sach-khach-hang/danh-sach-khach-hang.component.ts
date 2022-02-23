import { Component, OnInit } from '@angular/core';
// tslint:disable-next-line:import-spacing
import  {Customer} from '../../model/Customer';
import {KhachHangService} from "../../service/khach-hang.service";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {Customer_Type} from "../../model/Customer_Type";
import {LoaiKhachService} from "../../service/loai-khach.service";

@Component({
  selector: 'app-danh-sach-khach-hang',
  templateUrl: './danh-sach-khach-hang.component.html',
  styleUrls: ['./danh-sach-khach-hang.component.css']
})
export class DanhSachKhachHangComponent implements OnInit {

  customer: Customer | undefined;
  customers: Customer[] | undefined;

  public page;
  public searchValue!:string;
  public name!:string;
  public id!:number;

  constructor(private _customerService: KhachHangService,
              private _router: Router,
              private _activeRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this._customerService.getAllCustomer().subscribe(
      data => {
        this.customers = data;
        console.log(data);
      }, error => {
        console.log("Lấy dữ liệu thất bại!")
      }
    )
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
}
