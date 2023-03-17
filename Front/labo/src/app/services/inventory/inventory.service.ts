import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Inventory } from 'src/app/models/inventory.model';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  private apiUrl = 'http://localhost:3000/api/inventory';

  constructor(private http: HttpClient) { }

  getInventories(): Observable<Inventory[]> {
    console.log(this.http.get<Inventory[]>(this.apiUrl));
    
    return this.http.get<Inventory[]>(this.apiUrl);
  }

  getInventory(id: number): Observable<Inventory> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Inventory>(url);
  }

  addInventory(Inventory: Inventory): Observable<Inventory> {
    return this.http.post<Inventory>(this.apiUrl, Inventory);
  }

  // updateInventory(Inventory: Inventory): Observable<any> {
  //   const url = `${this.apiUrl}/${Inventory.book_id}`;
  //   return this.http.put(url, Inventory);
  // }

  // deleteInventory(id: number): Observable<Inventory> {
  //   const url = `${this.apiUrl}/${id}`;
  //   return this.http.delete<Inventory>(url);
  // }
}
