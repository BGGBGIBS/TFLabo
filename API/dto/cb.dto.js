module.exports = class CbDTO {
    constructor(cb_id, cb_street, cb_number, cb_box, cb_city, cb_postalcode) {
      this.cb_id = cb_id;
      this.cb_street = cb_street;
      this.cb_number = cb_number;
      this.cb_box = cb_box;
      this.cb_city = cb_city;
      this.cb_postalcode = cb_postalcode;
    }
  }