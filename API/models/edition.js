const { DataTypes } = require('sequelize');
module.exports = function(sequelize) {
  return sequelize.define('edition', {
    edition_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    edition_isbn: {
      type: DataTypes.BIGINT,
      allowNull: false,
      unique: true
    },
    book_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'book',
        key: 'book_id'
      }
    },
    publisher_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
