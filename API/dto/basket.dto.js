module.exports = class BasketDTO {
    constructor(basket_id, basket_street, basket_number, basket_box, basket_city, basket_postalcode) {
      this.basket_id = basket_id;
      this.basket_street = basket_street;
      this.basket_number = basket_number;
      this.basket_box = basket_box;
      this.basket_city = basket_city;
      this.basket_postalcode = basket_postalcode;
    }
  }