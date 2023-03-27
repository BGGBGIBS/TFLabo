import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ba } from 'src/app/models/ba.model';

@Injectable({
  providedIn: 'root'
})
export class BaService {

  private apiUrl = 'http://localhost:3000/api/Ba';

  constructor(private http: HttpClient) { }

  getBas(): Observable<Ba[]> {
    console.log(this.http.get<Ba[]>(this.apiUrl));
    
    return this.http.get<Ba[]>(this.apiUrl);
  }

  getBa(id: number): Observable<Ba> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Ba>(url);
  }

  getBaByAuthor(authorId: number): Observable<Ba>{
    const url = `${this.apiUrl}/author/${authorId}`;
    return this.http.get<Ba>(url);
  }

  addBa(Ba: Ba): Observable<Ba> {
    return this.http.post<Ba>(this.apiUrl, Ba);
  }

  updateBa(Ba: Ba): Observable<any> {
    const url = `${this.apiUrl}/${Ba.ba_id}`;
    return this.http.put(url, Ba);
  }

  deleteBa(id: number): Observable<Ba> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Ba>(url);
  }
}
