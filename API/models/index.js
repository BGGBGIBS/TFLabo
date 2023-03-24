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
db.Eb = require('./eb')(sequelize);
db.Edition = require('./edition')(sequelize);
db.Publisher = require('./publisher')(sequelize);
db.El = require('./el')(sequelize);
db.Book = require('./book')(sequelize);
db.Basket = require('./basket')(sequelize);
db.Ba = require('./ba')(sequelize);
db.Library = require('./library')(sequelize);

// Relation entre les auteurs et les Baps
db.Author.hasMany(db.Ba);
db.Ba.belongsTo(db.Author);

// Relation entre les éditeurs et les Baps
db.Publisher.hasMany(db.Edition);
db.Edition.belongsTo(db.Publisher);

// Relation entre les livres et les Baps
db.Book.hasMany(db.Ba);
db.Ba.belongsTo(db.Book);

// Relation entre les livres et les Bws
db.Book.hasMany(db.Edition);
db.Edition.belongsTo(db.Book);

// Relation entre les entrepôts et les Bws
db.Library.hasMany(db.Edition);
db.Edition.belongsTo(db.Library);

// Relation entre les clients et les paniers
db.Customer.hasMany(db.Basket);
db.Basket.belongsTo(db.Customer);

// Relation entre les paniers et les Cb
db.Basket.hasMany(db.Eb);
db.Eb.belongsTo(db.Basket);

// Relation entre les livres et les Cb
db.Edition.hasMany(db.Eb);
db.Eb.belongsTo(db.Edition);

// Relation many-to-many entre les auteurs et les livres via la table bap
db.Author.belongsToMany(db.Book, { through: 'Ba' });
db.Book.belongsToMany(db.Author, { through: 'Ba' });
db.Book.belongsToMany(db.Publisher, { through: 'Edition'});
db.Publisher.belongsToMany(db.Book, { through: 'Edition'});


// Relation many-to-many entre les livres et les paniers via la table cb
db.Edition.belongsToMany(db.Basket, { through: 'Eb' });
db.Basket.belongsToMany(db.Edition, { through: 'Eb' });

// Relation entre les livres et les entrepôts via la table bw
db.Edition.belongsToMany(db.Library, { through: 'El' });
db.Library.belongsToMany(db.Edition, { through: 'El' });


module.exports = db;