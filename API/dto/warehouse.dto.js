module.exports = class WarehouseDTO {
    constructor(warehouse_id, warehouse_street, warehouse_number, warehouse_box, warehouse_city, warehouse_postalcode) {
      this.warehouse_id = warehouse_id;
      this.warehouse_street = warehouse_street;
      this.warehouse_number = warehouse_number;
      this.warehouse_box = warehouse_box;
      this.warehouse_city = warehouse_city;
      this.warehouse_postalcode = warehouse_postalcode;
    }
  }