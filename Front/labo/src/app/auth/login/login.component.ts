import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string  = '';
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    if (this.username == 'admin' && this.password == 'admin') {
      this.router.navigate(['']);
    } else {
      alert('Nom d\'utilisateur ou mot de passe incorrect');
    }
  }
}
