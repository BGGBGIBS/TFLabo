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
  
  isGet: boolean;
  isAdd: boolean;
  isUpdate: boolean;
  isDelete: boolean;
  constructor() {
    this.isGet = false;
    this.isAdd = false;
    this.isUpdate = false;
    this.isDelete = false;
  }

  toggleIsGet(){
    this.isGet = !this.isGet;
    this.isAdd = false;
    this.isUpdate = false;
    this.isDelete = false;
  }
  toggleIsAdd(){
    this.isGet = false;
    this.isAdd = !this.isAdd;
    this.isUpdate = false;
    this.isDelete = false;
  }
  toggleIsUpdate(){
    this.isGet = false;
    this.isAdd = false;
    this.isUpdate = !this.isUpdate;
    this.isDelete = false;
  }
  toggleIsDelete(){
    this.isGet = false;
    this.isAdd = false;
    this.isUpdate = false;
    this.isDelete = !this.isDelete;
  }
}
