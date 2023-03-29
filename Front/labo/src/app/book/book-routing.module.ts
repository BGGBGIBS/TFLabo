import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddbookComponent } from './addbook/addbook.component';
import { BookComponent } from './book/book.component';
import { DeletebookComponent } from './deletebook/deletebook.component';
import { GetbookComponent } from './getbook/getbook.component';
import { UpdatebookComponent } from './updatebook/updatebook.component';

const routes: Routes = [
  { path: '', component: BookComponent },
  { path: 'get', component: GetbookComponent },
  { path: 'add', component: AddbookComponent },
  { path: 'update', component: UpdatebookComponent },
  { path: 'delete', component: DeletebookComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
