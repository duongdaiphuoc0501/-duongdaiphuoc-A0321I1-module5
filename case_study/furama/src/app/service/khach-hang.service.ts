import { Injectable } from '@angular/core';
import {Customer} from "../model/Customer";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class KhachHangService {
  private readonly API_URL = "http://localhost:3000/customer";

  constructor(private _httpClient: HttpClient) { }

  getAllCustomer(): Observable<any> {
    return this._httpClient.get(this.API_URL);
  }

  create(cutomer: Customer): Observable<any>{
    return this._httpClient.post(this.API_URL, cutomer);
  }

  findById(id: number): Observable<any> {
    return this._httpClient.get(this.API_URL + "/" + id);
  }

  search(search: string): Observable<any[]> {
    return this._httpClient.get<any[]>(this.API_URL + '?name_like=' + search);
  }

  delete(id: number): Observable<any> {
    return this._httpClient.delete(this.API_URL + "/" + id)
  }

  edit(customer, customerId): Observable<any> {
    return this._httpClient.put(this.API_URL + "/" + customerId, customer);
  }
}
