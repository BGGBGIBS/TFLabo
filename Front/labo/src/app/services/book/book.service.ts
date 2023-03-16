import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from 'src/app/models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private apiUrl = 'http://localhost:3000/api/book';

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    console.log(this.http.get<Book[]>(this.apiUrl));
    
    return this.http.get<Book[]>(this.apiUrl);
  }

  getBook(id: number): Observable<Book> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Book>(url);
  }

  addBook(Book: Book): Observable<Book> {
    return this.http.post<Book>(this.apiUrl, Book);
  }

  updateBook(Book: Book): Observable<any> {
    const url = `${this.apiUrl}/${Book.Book_id}`;
    return this.http.put(url, Book);
  }

  deleteBook(id: number): Observable<Book> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Book>(url);
  }
}
