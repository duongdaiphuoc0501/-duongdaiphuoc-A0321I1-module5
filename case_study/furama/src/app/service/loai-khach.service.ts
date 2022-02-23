import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../model/Customer";
import {Customer_Type} from "../model/Customer_Type";

@Injectable({
  providedIn: 'root'
})
export class LoaiKhachService {
  private readonly API_URL = "http://localhost:3000/customer_type";

  constructor(private _httpClient: HttpClient) { }
  getAllCustomerType(): Observable<Customer_Type[]> {
    return this._httpClient.get<Customer_Type[]>(this.API_URL);
  }

}
