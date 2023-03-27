module.exports = class BookDTO {
    constructor({ book_id, book_title, book_year, book_price, book_category }) {
      this.book_id = book_id;
      this.book_title = book_title;
      this.book_year = book_year;
      this.book_price = book_price;
      this.book_category = book_category;
    }
  };
  