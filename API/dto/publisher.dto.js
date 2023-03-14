module.exports = class PublisherDTO {
    constructor(publisher_id, publisher_street, publisher_number, publisher_box, publisher_city, publisher_postalcode) {
      this.publisher_id = publisher_id;
      this.publisher_street = publisher_street;
      this.publisher_number = publisher_number;
      this.publisher_box = publisher_box;
      this.publisher_city = publisher_city;
      this.publisher_postalcode = publisher_postalcode;
    }
  }