import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Library, LibraryArray } from 'src/app/models/library.model';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  private apiUrl = 'http://localhost:3000/api/library';

  constructor(private http: HttpClient) { }

  getLibrarys(): Observable<LibraryArray> {
    console.log(this.http.get<LibraryArray>(this.apiUrl));
    
    return this.http.get<LibraryArray>(this.apiUrl);
  }

  getLibrary(id: number): Observable<Library> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Library>(url);
  }

  addLibrary(Library: Library): Observable<Library> {
    return this.http.post<Library>(this.apiUrl, Library);
  }

  updateLibrary(Library: Library): Observable<any> {
    const url = `${this.apiUrl}/${Library.library_id}`;
    return this.http.put(url, Library);
  }

  deleteLibrary(id: number): Observable<Library> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Library>(url);
  }
}
