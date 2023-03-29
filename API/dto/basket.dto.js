module.exports = class BasketDTO {
    constructor({basket_id, customer_id, basket_count}) {
      this.basket_id = basket_id;
      this.customer_id = customer_id;
      this.basket_count = basket_count;
    }
  };
  