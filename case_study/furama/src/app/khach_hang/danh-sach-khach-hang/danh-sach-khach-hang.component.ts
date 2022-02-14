import { Component, OnInit } from '@angular/core';
// tslint:disable-next-line:import-spacing
import  {Customer} from '../../model/Customer';

@Component({
  selector: 'app-danh-sach-khach-hang',
  templateUrl: './danh-sach-khach-hang.component.html',
  styleUrls: ['./danh-sach-khach-hang.component.css']
})
export class DanhSachKhachHangComponent implements OnInit {
  constructor() { }

  isDisplay = true;

  customerList: Customer[] = [
    // tslint:disable-next-line:max-line-length
    {customerId: 1, customerName: 'Nguyen Van A', customerBirthday: '01/01/2001', customerGender: 0, customerIdCard: '1029481721', customerPhone: '0914726111', customerEmail: 'a@gmail.com', customerAddress: 'Quang Nam'},
  ];

  ngOnInit(): void {
  }

  onToggle(){
    this.isDisplay = !this.isDisplay;
  }
}
