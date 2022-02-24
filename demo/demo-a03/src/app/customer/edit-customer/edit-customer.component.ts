import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {CustomerServiceService} from "../customer-service.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Customer} from "../model/customer";
import {CustomerType} from "../model/customer-type";


@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss']
})
export class EditCustomerComponent implements OnInit {
  formEdit: FormGroup;
  customer: Customer;
  listCustomerType: CustomerType[];

  constructor(private activeRouter: ActivatedRoute,
              private customerService: CustomerServiceService,
              private fb: FormBuilder,
              private router: Router
  ) {
  }

  ngOnInit(): void {
    this.createForm();
    this.getAllCustomerType();
    this.activeRouter.paramMap.subscribe(
      (param: ParamMap) => {
        const id = param.get('id');
        this.customerService.getCustomerById(id).subscribe(
          data => {
            this.customer = data;
            this.formEdit.setValue(this.customer);
          }
        );
      }
    );
  }

  createForm() {
    this.formEdit = this.fb.group({
      id: [],
      name: [],
      birthday: [],
      email: [],
      customerType: []
    });
  }

  getAllCustomerType() {
    this.customerService.getAllCustomerType().subscribe(
      data => {
        this.listCustomerType = data;
        console.log(data);
      }
    );
  }

  compareFn(c1: CustomerType, c2: CustomerType): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

  onSubmit() {
    if (this.formEdit.valid) {
      this.customerService.updateCustomer(this.formEdit.value).subscribe(
        () => {
          this.router.navigateByUrl('/customer');
        }
      );
    }
  }
}
