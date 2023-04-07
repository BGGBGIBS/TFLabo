import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  login : FormGroup;
  


  constructor(private _fb : FormBuilder, private _authService : AuthService, private _router: Router) {
    this.login = this._fb.group({
      email: [null, [ Validators.required, Validators.email]],
      password: [null, Validators.required]
    })
  }

  logIn() {
    if(this.login.valid){
      this._authService.register(this.login.value).subscribe({
        next : (res) => {
          console.log("GO LOGIN");
          
          //Mettre dans localStorage notre token + autres infos
          localStorage.setItem('token', res.result.token)
          localStorage.setItem('customerId', res.result.Customer.customer_id.toString())
          localStorage.setItem('customerRole', res.result.Customer.customer_role)

          console.log("END LOGIN");
          
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
      this.login.markAllAsTouched()
    }
  }
}
