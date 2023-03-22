import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  username: string;
  firstname: string;
  lastname: string;
  birthdate: Date = new Date;
  email: string;
  password: string;

  constructor(private router: Router) {
    this.username = '';
    this.firstname = '';
    this.lastname = '';
    this.birthdate = new Date;
    this.email = '';
    this.password = '';
  }

  signin() {
    if (this.username === 'admin' && this.password === 'admin') {
      this.router.navigate(['/cv']);
    } else {
      alert('Nom d\'utilisateur ou mot de passe incorrect');
    }
  }
}
