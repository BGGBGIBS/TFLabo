import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {
  books: Book[] = [];

  constructor(private _BookService : BookService, private _router : Router) {}

  ngOnInit() : void{
    this._BookService.getBooks().subscribe({
      next: (res) => {
        console.log("NEXT", res);
        
        this.books = res.results;
      },
      error : (err) => {
        console.log("ERROR", err);
        
      },
      complete : () => {
        console.log("COMPLETE");
      }
    })
    
  }
}
