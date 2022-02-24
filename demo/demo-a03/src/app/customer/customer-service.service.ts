import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from 'rxjs';

@Injectable()
export class CustomerServiceService {

  constructor(private httpClient: HttpClient) {
  }

  cusUrl = 'http://localhost:3000/customer';
  cusTypeUrl = 'http://localhost:3000/customerType';

  getAllCustomer(): Observable<any> {
    return this.httpClient.get(this.cusUrl);
  }

  getAllCustomerType(): Observable<any> {
    return this.httpClient.get(this.cusTypeUrl);
  }

  getCustomerById(id: any): Observable<any> {
    return this.httpClient.get(this.cusUrl + '/' + id);
  }

  updateCustomer(obj: any): Observable<any> {
    return this.httpClient.put(this.cusUrl + '/' + obj.id, obj);
  }

  searchCustomer(obj: any): Observable<any> {
    return this.httpClient.get(this.cusUrl + '?name_like=' + obj.name + '&email_like=' + obj.email + '&customerType.typeName_like=' + obj.customerType);
  }

  deleteCustomer(id: any) {
    return this.httpClient.delete(this.cusUrl + '/' + id);

  }
}
