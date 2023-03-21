import { Component } from '@angular/core';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { Customer } from 'src/app/models/customer.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent {
  customers: Customer [] = [];

  constructor(private _customerService : CustomerService, private _router : Router) {}

  ngOnInit() : void{
    this._customerService.getCustomers().subscribe({
      next: (res) => {
        console.log("NEXT", res);
        this.customers = res;
      },
      error : (err) => {
        console.log("ERROR", err);
        
      },
      complete : () => {
        console.log("COMPLETE");
      }
    })
    
  }
}
