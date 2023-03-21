import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Warehouse } from 'src/app/models/warehouse.model';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WarehouseService {

  private apiUrl = 'http://localhost:3000/api/library';

  constructor(private http: HttpClient) { }

  getWarehouses(): Observable<Warehouse[]> {
    console.log(this.http.get<Warehouse[]>(this.apiUrl));
    
    return this.http.get<Warehouse[]>(this.apiUrl);
  }

  getWarehouse(id: number): Observable<Warehouse> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Warehouse>(url);
  }

  addWarehouse(Warehouse: Warehouse): Observable<Warehouse> {
    return this.http.post<Warehouse>(this.apiUrl, Warehouse);
  }

  updateWarehouse(Warehouse: Warehouse): Observable<any> {
    const url = `${this.apiUrl}/${Warehouse.warehouse_id}`;
    return this.http.put(url, Warehouse);
  }

  deleteWarehouse(id: number): Observable<Warehouse> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Warehouse>(url);
  }
}
