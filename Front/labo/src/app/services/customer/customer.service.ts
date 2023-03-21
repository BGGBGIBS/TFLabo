import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private apiUrl = 'http://localhost:3000/api/customer';

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<Customer[]> {
    console.log(this.http.get<Customer[]>(this.apiUrl));
    
    return this.http.get<Customer[]>(this.apiUrl);
  }

  getCustomer(id: number): Observable<Customer> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Customer>(url);
  }

  addCustomer(Customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.apiUrl, Customer);
  }

  updateCustomer(Customer: Customer): Observable<any> {
    const url = `${this.apiUrl}/${Customer.customer_id}`;
    return this.http.put(url, Customer);
  }

  deleteCustomer(id: number): Observable<Customer> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Customer>(url);
  }
}
