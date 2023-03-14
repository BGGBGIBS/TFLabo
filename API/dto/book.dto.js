module.exports = class BooksDTO {
    constructor(books_id, books_street, books_number, books_box, books_city, books_postalcode) {
      this.books_id = books_id;
      this.books_street = books_street;
      this.books_number = books_number;
      this.books_box = books_box;
      this.books_city = books_city;
      this.books_postalcode = books_postalcode;
    }
  }