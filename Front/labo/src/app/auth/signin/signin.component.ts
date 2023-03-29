import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  signin : FormGroup;

  constructor(private _fb : FormBuilder, private _authService : AuthService, private _router: Router) {
    this.signin = this._fb.group({
      customername: [null, Validators.required],
      firstname: [null, Validators.required],
      lastname: [null, Validators.required],
      birthdate: [null, Validators.required],
      email: [null,[Validators.required, Validators.email]],
      password: [null, Validators.required]
    })
  }

  signIn() {
    if(this.signin.valid){
      this._authService.register(this.signin.value).subscribe({
        next : (res) => {
          //Mettre dans localStorage notre token + autres infos
          localStorage.setItem('token', res.result.token)
          localStorage.setItem('customerId', res.result.Customer.customer_id.toString())
          localStorage.setItem('customerRole', res.result.Customer.customer_role)

          //Gestion observable pour savoir si une personne est connectée
          this._authService.connect() //Pour émettre aux autres composants que la connection est établie
        },
        error : (err) => {
          //TODO : Gestion de l'erreur email unique
        },
        complete : () => {
          //Redirection vers accueil
          this._router.navigateByUrl('/')
        }
      })
    }else {
      this.signin.markAllAsTouched()
    }
  }
}
