import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Author } from 'src/app/models/author.model';
import { AuthorService } from 'src/app/services/author/author.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent {
  authors: Author [] = [];

  constructor(private _AuthorService : AuthorService, private _router : Router) {}

  ngOnInit() : void{
    this._AuthorService.getAuthors().subscribe({
      next: (res) => {
        console.log("NEXT", res);
        this.authors = res.results;
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
