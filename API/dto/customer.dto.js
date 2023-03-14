module.exports = class CustomerDTO {
    constructor(customer_id, customer_street, customer_number, customer_box, customer_city, customer_postalcode) {
      this.customer_id = customer_id;
      this.customer_street = customer_street;
      this.customer_number = customer_number;
      this.customer_box = customer_box;
      this.customer_city = customer_city;
      this.customer_postalcode = customer_postalcode;
    }
  }