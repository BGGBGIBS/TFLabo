module.exports = class BapDTO {
    constructor(bap_id, bap_street, bap_number, bap_box, bap_city, bap_postalcode) {
      this.bap_id = bap_id;
      this.bap_street = bap_street;
      this.bap_number = bap_number;
      this.bap_box = bap_box;
      this.bap_city = bap_city;
      this.bap_postalcode = bap_postalcode;
    }
  }