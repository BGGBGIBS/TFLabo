const { DataTypes } = require('sequelize');
module.exports = function(sequelize) {
  return sequelize.define('book', {
    book_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    book_title: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    book_year: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    book_price: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    book_category: {
      type: DataTypes.STRING(50),
      allowNull: false
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
