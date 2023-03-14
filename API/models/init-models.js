var DataTypes = require("sequelize").DataTypes;
var _author = require("./author");
var _bap = require("./bap");
var _basket = require("./basket");
var _book = require("./book");
var _bw = require("./bw");
var _cb = require("./cb");
var _customer = require("./customer");
var _publisher = require("./publisher");
var _warehouse = require("./warehouse");

function initModels(sequelize) {
  var author = _author(sequelize, DataTypes);
  var bap = _bap(sequelize, DataTypes);
  var basket = _basket(sequelize, DataTypes);
  var book = _book(sequelize, DataTypes);
  var bw = _bw(sequelize, DataTypes);
  var cb = _cb(sequelize, DataTypes);
  var customer = _customer(sequelize, DataTypes);
  var publisher = _publisher(sequelize, DataTypes);
  var warehouse = _warehouse(sequelize, DataTypes);

  bap.belongsTo(author, { as: "author", foreignKey: "author_id"});
  author.hasMany(bap, { as: "baps", foreignKey: "author_id"});
  cb.belongsTo(basket, { as: "basket", foreignKey: "basket_id"});
  basket.hasMany(cb, { as: "cbs", foreignKey: "basket_id"});
  bap.belongsTo(book, { as: "book", foreignKey: "book_id"});
  book.hasMany(bap, { as: "baps", foreignKey: "book_id"});
  bw.belongsTo(book, { as: "book", foreignKey: "book_id"});
  book.hasMany(bw, { as: "bws", foreignKey: "book_id"});
  cb.belongsTo(book, { as: "book", foreignKey: "book_id"});
  book.hasMany(cb, { as: "cbs", foreignKey: "book_id"});
  basket.belongsTo(customer, { as: "customer", foreignKey: "customer_id"});
  customer.hasMany(basket, { as: "baskets", foreignKey: "customer_id"});
  bap.belongsTo(publisher, { as: "publisher", foreignKey: "publisher_id"});
  publisher.hasMany(bap, { as: "baps", foreignKey: "publisher_id"});
  bw.belongsTo(warehouse, { as: "warehouse", foreignKey: "warehouse_id"});
  warehouse.hasMany(bw, { as: "bws", foreignKey: "warehouse_id"});

  return {
    author,
    bap,
    basket,
    book,
    bw,
    cb,
    customer,
    publisher,
    warehouse,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
