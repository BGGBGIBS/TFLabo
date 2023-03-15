import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { routes } from 'src/app/app-routing.module';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  appRoutes: Routes;
  constructor(){
    this.appRoutes = routes;
  }
}
