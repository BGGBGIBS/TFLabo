import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddauthorComponent } from './addauthor/addauthor.component';
import { AuthorComponent } from './author/author.component';
import { DeleteauthorComponent } from './deleteauthor/deleteauthor.component';
import { UpdateauthorComponent } from './updateauthor/updateauthor.component';

const routes: Routes = [
  { path: '', component: AuthorComponent },
  { path: 'add', component: AddauthorComponent },
  { path: 'update', component: UpdateauthorComponent },
  { path: 'delete', component: DeleteauthorComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorRoutingModule { }
