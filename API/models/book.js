const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('book', {
    book_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    book_isbn: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    book_title: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    book_year: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    book_price: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    book_category: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'book',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_book",
        unique: true,
        fields: [
          { name: "book_id" },
        ]
      },
    ]
  });
};
