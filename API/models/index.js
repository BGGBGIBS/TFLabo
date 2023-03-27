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
// db.Ba = require('./ba')(sequelize);
db.Library = require('./library')(sequelize);

// db.Author.hasMany(db.Ba);
// db.Ba.belongsTo(db.Author);

// db.Publisher.hasMany(db.Edition);
// db.Edition.belongsTo(db.Publisher);

// db.Book.hasMany(db.Ba);
// db.Ba.belongsTo(db.Book);

// db.Book.hasMany(db.Edition);
// db.Edition.belongsTo(db.Book);

// db.Library.hasMany(db.Edition);
// db.Edition.belongsTo(db.Library);

db.Customer.hasMany(db.Basket);
db.Basket.belongsTo(db.Customer);

// db.Basket.hasMany(db.Eb);
// db.Eb.belongsTo(db.Basket);

// db.Edition.hasMany(db.Eb);
// db.Eb.belongsTo(db.Edition);

db.Author.belongsToMany(db.Book, { through: 'ba' });
db.Book.belongsToMany(db.Author, { through: 'ba' });

db.Book.belongsToMany(db.Publisher, { through: db.Edition});
db.Publisher.belongsToMany(db.Book, { through: db.Edition});


db.Edition.belongsToMany(db.Basket, { through: db.Eb });
db.Basket.belongsToMany(db.Edition, { through: db.Eb });

db.Edition.belongsToMany(db.Library, { through: db.El });
db.Library.belongsToMany(db.Edition, { through: db.El });


module.exports = db;