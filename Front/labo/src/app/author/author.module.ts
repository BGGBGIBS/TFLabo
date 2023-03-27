import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorRoutingModule } from './author-routing.module';
import { AuthorComponent } from './author/author.component';
import { AgePipe } from '../pipes/age.pipe';


@NgModule({
  declarations: [
    AuthorComponent,
    AgePipe
  ],
  imports: [
    CommonModule,
    AuthorRoutingModule
  ],
  exports: [
    AuthorComponent
  ]
})
export class AuthorModule { }
