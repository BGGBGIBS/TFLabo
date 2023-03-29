import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Book, BookDTO } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book/book.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.scss']
})
export class AddbookComponent {
  bookForm: FormGroup;

  constructor(private _BookService : BookService, private formBuilder: FormBuilder) { 
    this.bookForm = this.formBuilder.group({
      book_title: ['', Validators.required],
      book_year: ['', Validators.required],
      book_price: ['', Validators.required],
      book_category: ['', Validators.required]
    });
  }


  onSubmit() {
    // Vérifier que le formulaire est valide
    if (this.bookForm.invalid) {
      return;
    }

    // Créer un nouvel objet Book à partir des valeurs du formulaire
    const newBook: BookDTO = {
      book_title: this.bookForm.value.book_title,
      book_year: this.bookForm.value.book_year,
      book_price: this.bookForm.value.book_price,
      book_category: this.bookForm.value.book_category
    };

    // TODO: Ajouter le nouveau livre en utilisant un service
    this._BookService.addBook(newBook).subscribe(() => {
      // Réinitialiser le formulaire si l'ajout a réussi
      this.bookForm.reset();
    });
    // Réinitialiser le formulaire
    this.bookForm.reset();
  }
}
