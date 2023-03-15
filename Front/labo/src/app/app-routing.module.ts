import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';

export const routes: Routes = [
  { path: '',title:'Home', component: HomeComponent},
  { path: 'warehouse', title:'Warehouse', loadChildren: () => import('./warehouse/warehouse.module').then(m=>m.WarehouseModule)},
  { path : '**', redirectTo : 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
