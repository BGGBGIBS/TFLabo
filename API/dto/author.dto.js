module.exports = class AuthorDTO {
    constructor({author_id, author_firstname, author_lastname, author_email, author_address, author_url, author_birthdate}) {
      this.author_id = author_id;
      this.author_firstname = author_firstname;
      this.author_lastname = author_lastname;
      this.author_email = author_email;
      this.author_address = author_address;
      this.author_url = author_url;
      this.author_birthdate = author_birthdate;
    }
  };
  