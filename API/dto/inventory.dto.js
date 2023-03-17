module.exports = class InventoryDTO {
    constructor(warehouse_name, book_title, bw_count) {
      this.warehouse_name = warehouse_name;
      this.book_title = book_title;
      this.bw_count = bw_count;
    }
  };
