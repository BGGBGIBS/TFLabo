import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WarehouseRoutingModule } from './warehouse-routing.module';
import { WarehouseComponent } from './warehouse/warehouse.component';


@NgModule({
  declarations: [
    WarehouseComponent
  ],
  imports: [
    CommonModule,
    WarehouseRoutingModule
  ],
  exports: [
    WarehouseComponent
  ]
})
export class WarehouseModule { }
