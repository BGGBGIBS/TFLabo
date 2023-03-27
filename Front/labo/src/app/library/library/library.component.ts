import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Library } from 'src/app/models/library.model';
import { LibraryService } from 'src/app/services/library/library.service';

@Component({
  selector: 'app-Library',
  templateUrl: './Library.component.html',
  styleUrls: ['./Library.component.scss']
})
export class LibraryComponent {
  librarys: Library[] = [];

  constructor(private _LibraryService : LibraryService, private _router : Router) {}

  ngOnInit() : void{
    this._LibraryService.getLibrarys().subscribe({
      next: (res) => {
        console.log("NEXT", res);
        this.librarys = res.results;
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
