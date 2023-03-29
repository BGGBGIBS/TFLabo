import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { CustomerComponent } from './customer/customer.component';
import { DeletecustomerComponent } from './deletecustomer/deletecustomer.component';
import { UpdatecustomerComponent } from './updatecustomer/updatecustomer.component';

const routes: Routes = [
  { path: '', component: CustomerComponent },
  { path: 'add', component: AddcustomerComponent },
  { path: 'update', component: UpdatecustomerComponent },
  { path: 'delete', component: DeletecustomerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
