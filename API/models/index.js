var Sequelize = require('sequelize');

var { DB_SERVER, DB_DATABASE, DB_USERNAME, DB_PASSWORD } = process.env;

var sequelize = new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {
    host : DB_SERVER,
    dialect : 'mssql' 
})

const db = {};
db.sequelize = sequelize; 

db.Author = require('./bap')(sequelize);
db.Customer = require('./customer')(sequelize);
db.Cb = require('./cb')(sequelize);
db.Publisher = require('./publisher')(sequelize);
db.Bw = require('./bw')(sequelize);
db.Book = require('./book')(sequelize);
db.Basket = require('./basket')(sequelize);
db.Bap = require('./bap')(sequelize);
db.Warehouse = require('./warehouse')(sequelize);


module.exports = db;