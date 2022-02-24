import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { DanhSachKhachHangComponent } from './khach_hang/danh-sach-khach-hang/danh-sach-khach-hang.component';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import { TaoKhachHangComponent } from './khach_hang/tao-khach-hang/tao-khach-hang.component';
import {NgxPaginationModule} from "ngx-pagination";
import { SuaKhachHangComponent } from './khach_hang/sua-khach-hang/sua-khach-hang.component';
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    DanhSachKhachHangComponent,
    TaoKhachHangComponent,
    SuaKhachHangComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
