import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { DanhSachKhachHangComponent } from './khach_hang/danh-sach-khach-hang/danh-sach-khach-hang.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    DanhSachKhachHangComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
