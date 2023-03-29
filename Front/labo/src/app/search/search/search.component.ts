import { Component } from '@angular/core';
import { Author } from 'src/app/models/author.model';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book/book.service';
import { AuthorService } from 'src/app/services/author/author.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  books: Book[] =[];
  authors: Author[] = [];
  array: Array<any> = [];

  constructor(private bookService: BookService, private authorService: AuthorService) { }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((response: any) => {
      this.books = response.results;
    });

    this.authorService.getAuthors().subscribe((response: any) => {
      this.authors = response.results;
    });
  }
}
