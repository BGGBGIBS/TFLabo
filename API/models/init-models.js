var DataTypes = require("sequelize").DataTypes;
var _author = require("./author");
var _ba = require("./ba");
var _basket = require("./basket");
var _book = require("./book");
var _customer = require("./customer");
var _eb = require("./eb");
var _edition = require("./edition");
var _el = require("./el");
var _library = require("./library");
var _publisher = require("./publisher");

function initModels(sequelize) {
  var author = _author(sequelize, DataTypes);
  var ba = _ba(sequelize, DataTypes);
  var basket = _basket(sequelize, DataTypes);
  var book = _book(sequelize, DataTypes);
  var customer = _customer(sequelize, DataTypes);
  var eb = _eb(sequelize, DataTypes);
  var edition = _edition(sequelize, DataTypes);
  var el = _el(sequelize, DataTypes);
  var library = _library(sequelize, DataTypes);
  var publisher = _publisher(sequelize, DataTypes);

  ba.belongsTo(author, { as: "author", foreignKey: "author_id"});
  author.hasMany(ba, { as: "bas", foreignKey: "author_id"});
  eb.belongsTo(basket, { as: "basket", foreignKey: "basket_id"});
  basket.hasMany(eb, { as: "ebs", foreignKey: "basket_id"});
  ba.belongsTo(book, { as: "book", foreignKey: "book_id"});
  book.hasMany(ba, { as: "bas", foreignKey: "book_id"});
  edition.belongsTo(book, { as: "book", foreignKey: "book_id"});
  book.hasMany(edition, { as: "editions", foreignKey: "book_id"});
  basket.belongsTo(customer, { as: "customer", foreignKey: "customer_id"});
  customer.hasMany(basket, { as: "baskets", foreignKey: "customer_id"});
  eb.belongsTo(edition, { as: "edition", foreignKey: "edition_id"});
  edition.hasMany(eb, { as: "ebs", foreignKey: "edition_id"});
  el.belongsTo(edition, { as: "edition", foreignKey: "edition_id"});
  edition.hasMany(el, { as: "els", foreignKey: "edition_id"});
  el.belongsTo(library, { as: "library", foreignKey: "library_id"});
  library.hasMany(el, { as: "els", foreignKey: "library_id"});
  edition.belongsTo(publisher, { as: "publisher", foreignKey: "publisher_id"});
  publisher.hasMany(edition, { as: "editions", foreignKey: "publisher_id"});

  return {
    author,
    ba,
    basket,
    book,
    customer,
    eb,
    edition,
    el,
    library,
    publisher,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
