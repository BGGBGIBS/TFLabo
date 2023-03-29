import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { BookComponent } from './book/book.component';
import { AddbookComponent } from './addbook/addbook.component';
import { UpdatebookComponent } from './updatebook/updatebook.component';
import { DeletebookComponent } from './deletebook/deletebook.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetbookComponent } from './getbook/getbook.component';


@NgModule({
  declarations: [
    BookComponent,
    AddbookComponent,
    UpdatebookComponent,
    DeletebookComponent,
    GetbookComponent
  ],
  imports: [
    CommonModule,
    BookRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    BookComponent,
    AddbookComponent,
    UpdatebookComponent,
    DeletebookComponent,
    GetbookComponent
  ]
})
export class BookModule { }
