import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';

export const routes: Routes = [
  { path: '',title:'Home', component: HomeComponent},
  { path: 'warehouse', title:'Warehouse', loadChildren: () => import('./warehouse/warehouse.module').then(m=>m.WarehouseModule)},
  { path: 'book', title:'Book', loadChildren: () => import('./book/book.module').then(m=>m.BookModule)},
  { path: 'customer', title: 'Customer', loadChildren: () => import('./customer/customer.module').then(m=>m.CustomerModule)},
  { path: 'author', title: 'Author', loadChildren: () => import('./author/author.module').then(m=>m.AuthorModule)},
  { path: 'basket', title: 'Basket', loadChildren: () => import('./basket/basket.module').then(m=>m.BasketModule)},
  { path: 'search', title:'Search', loadChildren: () => import('./search/search.module').then(m=>m.SearchModule)},
  { path: 'auth', title: 'Auth', loadChildren: () => import('./auth/auth.module').then(m=>m.AuthModule)}
  // { path : '**', redirectTo : 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
