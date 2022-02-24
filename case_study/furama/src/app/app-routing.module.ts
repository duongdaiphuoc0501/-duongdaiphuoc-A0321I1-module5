import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {DanhSachKhachHangComponent} from "./khach_hang/danh-sach-khach-hang/danh-sach-khach-hang.component";
import {TaoKhachHangComponent} from "./khach_hang/tao-khach-hang/tao-khach-hang.component";
import {SuaKhachHangComponent} from "./khach_hang/sua-khach-hang/sua-khach-hang.component";


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'customer', component: DanhSachKhachHangComponent},
  { path: 'customer/create', component: TaoKhachHangComponent},
  { path: 'customer/edit/:id', component: SuaKhachHangComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
