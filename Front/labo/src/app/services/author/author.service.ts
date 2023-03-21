import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Author } from 'src/app/models/author.model';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  private apiUrl = 'http://localhost:3000/api/author';

  constructor(private http: HttpClient) { }

  getAuthors(): Observable<Author[]> {
    console.log(this.http.get<Author[]>(this.apiUrl));
    
    return this.http.get<Author[]>(this.apiUrl);
  }

  getAuthor(id: number): Observable<Author> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Author>(url);
  }

  addAuthor(Author: Author): Observable<Author> {
    return this.http.post<Author>(this.apiUrl, Author);
  }

  updateAuthor(Author: Author): Observable<any> {
    const url = `${this.apiUrl}/${Author.author_id}`;
    return this.http.put(url, Author);
  }

  deleteAuthor(id: number): Observable<Author> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Author>(url);
  }
}
