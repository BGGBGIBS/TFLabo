import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasketRoutingModule } from './basket-routing.module';
import { BasketComponent } from './basket/basket.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BasketComponent
  ],
  imports: [
    CommonModule,
    BasketRoutingModule,
    FormsModule
  ],
  exports: [
    BasketComponent
  ]
})
export class BasketModule { }
