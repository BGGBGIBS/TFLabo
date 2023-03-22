import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  isNew: boolean;
  isSwitch: string;
  constructor(){
    this.isNew = false;
    this.isSwitch = 'Login';
  }
  toggleIsNew(){
    this.isNew = !this.isNew;
  }
  toggleIsSwitch(): string{
    if(this.isNew){
      this.isSwitch = 'Sign In';
      return this.isSwitch;
    }
    else {
      this.isSwitch = 'Log In';
      return this.isSwitch;
    }
  }
}
