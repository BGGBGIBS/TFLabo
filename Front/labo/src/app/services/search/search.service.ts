import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  apiUrl = 'http://localhost:3000/api/search/';

  constructor(private http: HttpClient) { }

  getAllBooks(): Observable<any> {
    return this.http.get(`${this.apiUrl}/books`);
  }

  getAuthors(): Observable<any> {
    return this.http.get(`${this.apiUrl}/authors`);
  }
}
