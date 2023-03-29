import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer/customer.component';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { UpdatecustomerComponent } from './updatecustomer/updatecustomer.component';
import { DeletecustomerComponent } from './deletecustomer/deletecustomer.component';
import { GetcustomerComponent } from './getcustomer/getcustomer.component';


@NgModule({
  declarations: [
    CustomerComponent,
    AddcustomerComponent,
    UpdatecustomerComponent,
    DeletecustomerComponent,
    GetcustomerComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ],
  exports: [
    CustomerComponent,
    AddcustomerComponent,
    UpdatecustomerComponent,
    DeletecustomerComponent,
    GetcustomerComponent
  ]
})
export class CustomerModule { }
