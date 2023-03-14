module.exports = class AuthorDTO {
    constructor(author_id, author_street, author_number, author_box, author_city, author_postalcode) {
      this.author_id = author_id;
      this.author_street = author_street;
      this.author_number = author_number;
      this.author_box = author_box;
      this.author_city = author_city;
      this.author_postalcode = author_postalcode;
    }
  }