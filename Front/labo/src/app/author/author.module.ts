import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorRoutingModule } from './author-routing.module';
import { AuthorComponent } from './author/author.component';
import { AgePipe } from '../pipes/age.pipe';
import { AddauthorComponent } from './addauthor/addauthor.component';
import { UpdateauthorComponent } from './updateauthor/updateauthor.component';
import { DeleteauthorComponent } from './deleteauthor/deleteauthor.component';


@NgModule({
  declarations: [
    AuthorComponent,
    AgePipe,
    AddauthorComponent,
    UpdateauthorComponent,
    DeleteauthorComponent
  ],
  imports: [
    CommonModule,
    AuthorRoutingModule
  ],
  exports: [
    AuthorComponent,
    AddauthorComponent,
    UpdateauthorComponent,
    DeleteauthorComponent
  ]
})
export class AuthorModule { }
