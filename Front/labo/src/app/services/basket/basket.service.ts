import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Basket } from 'src/app/models/basket.model';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  private apiUrl = 'http://localhost:3000/api/basket';

  constructor(private http: HttpClient) { }

  getBaskets(): Observable<Basket[]> {
    console.log(this.http.get<Basket[]>(this.apiUrl));
    
    return this.http.get<Basket[]>(this.apiUrl);
  }

  getBasket(id: number): Observable<Basket> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Basket>(url);
  }

  addBasket(Basket: Basket): Observable<Basket> {
    return this.http.post<Basket>(this.apiUrl, Basket);
  }

  updateBasket(Basket: Basket): Observable<any> {
    const url = `${this.apiUrl}/${Basket.basket_id}`;
    return this.http.put(url, Basket);
  }

  deleteBasket(id: number): Observable<Basket> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Basket>(url);
  }
}
