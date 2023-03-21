const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('edition', {
    edition_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    edition_isbn: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    book_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'book',
        key: 'book_id'
      }
    },
    publisher_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'publisher',
        key: 'publisher_id'
      }
    }
  }, {
    sequelize,
    tableName: 'edition',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_edition",
        unique: true,
        fields: [
          { name: "edition_id" },
        ]
      },
    ]
  });
};
