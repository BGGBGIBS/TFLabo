import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book, BookArray, BookDTO } from 'src/app/models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private apiUrl = 'http://localhost:3000/api/book';

  constructor(private http: HttpClient) { }

  getBooks(): Observable<BookArray> {
    console.log(this.http.get<BookArray>(this.apiUrl));
    
    return this.http.get<BookArray>(this.apiUrl);
  }

  getBook(id: number): Observable<Book> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Book>(url);
  }

  addBook(Book: BookDTO): Observable<BookDTO> {
    return this.http.post<BookDTO>(this.apiUrl, Book);
  }

  updateBook(Book: Book): Observable<any> {
    const url = `${this.apiUrl}/${Book.book_id}`;
    return this.http.put(url, Book);
  }

  deleteBook(id: number): Observable<Book> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Book>(url);
  }
}
