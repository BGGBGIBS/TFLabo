import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bap } from 'src/app/models/bap.model';

@Injectable({
  providedIn: 'root'
})
export class BapService {

  private apiUrl = 'http://localhost:3000/api/bap';

  constructor(private http: HttpClient) { }

  getBaps(): Observable<Bap[]> {
    console.log(this.http.get<Bap[]>(this.apiUrl));
    
    return this.http.get<Bap[]>(this.apiUrl);
  }

  getBap(id: number): Observable<Bap> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Bap>(url);
  }

  addBap(Bap: Bap): Observable<Bap> {
    return this.http.post<Bap>(this.apiUrl, Bap);
  }

  updateBap(Bap: Bap): Observable<any> {
    const url = `${this.apiUrl}/${Bap.Bap_id}`;
    return this.http.put(url, Bap);
  }

  deleteBap(id: number): Observable<Bap> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Bap>(url);
  }
}
