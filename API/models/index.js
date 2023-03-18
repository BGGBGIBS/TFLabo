var Sequelize = require('sequelize');

var { DB_SERVER, DB_DATABASE, DB_USERNAME, DB_PASSWORD } = process.env;

var sequelize = new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {
    host : DB_SERVER,
    dialect : 'mssql' 
})

const db = {};
db.sequelize = sequelize; 

db.Author = require('./author')(sequelize);
db.Customer = require('./customer')(sequelize);
db.Cb = require('./cb')(sequelize);
db.Publisher = require('./publisher')(sequelize);
db.Bw = require('./bw')(sequelize);
db.Book = require('./book')(sequelize);
db.Basket = require('./basket')(sequelize);
db.Bap = require('./bap')(sequelize);
db.Warehouse = require('./warehouse')(sequelize);

// Relation entre les auteurs et les Baps
db.Author.hasMany(db.Bap);
db.Bap.belongsTo(db.Author);

// Relation entre les éditeurs et les Baps
db.Publisher.hasMany(db.Bap);
db.Bap.belongsTo(db.Publisher);

// Relation entre les livres et les Baps
db.Book.hasMany(db.Bap);
db.Bap.belongsTo(db.Book);

// Relation entre les livres et les Bws
db.Book.hasMany(db.Bw);
db.Bw.belongsTo(db.Book);

// Relation entre les entrepôts et les Bws
db.Warehouse.hasMany(db.Bw);
db.Bw.belongsTo(db.Warehouse);

// Relation entre les clients et les paniers
db.Customer.hasMany(db.Basket);
db.Basket.belongsTo(db.Customer);

// Relation entre les paniers et les Cb
db.Basket.hasMany(db.Cb);
db.Cb.belongsTo(db.Basket);

// Relation entre les livres et les Cb
db.Book.hasMany(db.Cb);
db.Cb.belongsTo(db.Book);

// Relation many-to-many entre les auteurs et les livres via la table bap
db.Author.belongsToMany(db.Book, { through: 'Bap' });
db.Author.belongsToMany(db.Publisher, { through: 'Bap'});
db.Book.belongsToMany(db.Author, { through: 'Bap' });
db.Book.belongsToMany(db.Publisher, { through: 'Bap'});
db.Publisher.belongsToMany(db.Author, { through: 'Bap'});
db.Publisher.belongsToMany(db.Book, { through: 'Bap'});


// Relation many-to-many entre les livres et les paniers via la table cb
db.Book.belongsToMany(db.Basket, { through: 'Cb' });
db.Basket.belongsToMany(db.Book, { through: 'Cb' });

// Relation entre les livres et les entrepôts via la table bw
db.Book.belongsToMany(db.Warehouse, { through: 'Bw' });
db.Warehouse.belongsToMany(db.Book, { through: 'Bw' });


module.exports = db;