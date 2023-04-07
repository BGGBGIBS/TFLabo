module.exports = class CustomerDTO {
    constructor({ customer_id, customer_firstname, customer_lastname, customer_email, customer_address, customer_phone, customer_birthdate, customer_role }) {
      this.customer_id = customer_id;
      this.customer_firstname = customer_firstname;
      this.customer_lastname = customer_lastname;
      this.customer_email = customer_email;
      this.customer_address = customer_address;
      this.customer_phone = customer_phone;
      this.customer_birthdate = customer_birthdate;
      this.customer_role = customer_role;
    }
  };
