import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Auth } from 'src/app/models/auth.model';
import { Login } from 'src/app/models/login.model';
import { Register } from 'src/app/models/register.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _authUrl : string = 'http://localhost:3000/api/auth/'

  private _isConnected$ : BehaviorSubject<boolean> = new BehaviorSubject(localStorage.getItem('token') && localStorage.getItem('token') != '' ? true : false)

  //asObservable permet de transformer un Subject ou Behavior en simple Observable
  //Ainsi, les composants pourront juste s'abonner à lui, mais c'est le service qui se charge de next une nouvelle valeur
  isConnected$ : Observable<boolean> = this._isConnected$.asObservable()

  constructor(private _httpClient : HttpClient) { }

  register(register : Register) : Observable<Auth> {
    return this._httpClient.post<Auth>(this._authUrl+'register', register)
  }

  login(login : Login) : Observable<Auth> {
    return this._httpClient.post<Auth>(this._authUrl+'login', login)
  }

  logout() : void {
    localStorage.clear()
    //Si vous stockez d'autres valeurs, que vous souhaitez garder 
      //localStorage.removeItem('token') //pareil avec userId, userRole
    this._isConnected$.next(false);
  }

  connect() : void {
    this._isConnected$.next(true);
  }
}
