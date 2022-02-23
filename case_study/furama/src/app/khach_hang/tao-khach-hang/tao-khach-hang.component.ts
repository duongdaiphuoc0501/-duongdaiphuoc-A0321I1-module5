import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {KhachHangService} from "../../service/khach-hang.service";
import {Router} from "@angular/router";
import {LoaiKhachService} from "../../service/loai-khach.service";

@Component({
  selector: 'app-tao-khach-hang',
  templateUrl: './tao-khach-hang.component.html',
  styleUrls: ['./tao-khach-hang.component.css']
})
export class TaoKhachHangComponent implements OnInit {

  public rfCustomer: FormGroup;
  public customerTypes;
  public cusType;
  public id;
  public name;

  constructor(private  _formBuilder: FormBuilder,
              private _customerService: KhachHangService,
              private _customerTypeService: LoaiKhachService,
              private _router: Router) {
  }

  ngOnInit(): void {
    this._customerTypeService.getAllCustomerType().subscribe(data => {
      this.customerTypes = data;
    }, error => {
      console.log('Lấy dữ liệu thất bại!');
    });

    this.rfCustomer = this._formBuilder.group({
      customerName: ['', [Validators.required]],
      customerBirthday: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      customerIdCard: ['', [Validators.required]],
      customerPhone: ['', [Validators.required]],
      customerAddress: ['', [Validators.required]],
      customer_type: this._formBuilder.group({
        id: [''],
        name: ['', [Validators.required]]
      }),
    })
  }

  createCustomer() {
    if (this.rfCustomer.valid) {
      this._customerService.create(this.rfCustomer.value).subscribe(data=>{
        console.log(data);
        this._router.navigateByUrl('customer');
      })
    }
    console.log(this.rfCustomer);
  }


  changeCustomerType(type: any) {
    this.cusType = JSON.parse(type);
    this.id = this.cusType.id;
    this.name = this.cusType.name;
    console.log(this.cusType);
  }
}
