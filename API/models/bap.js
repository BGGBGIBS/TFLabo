const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bap', {
    bap_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    author_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'author',
        key: 'author_id'
      }
    },
    publisher_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'publisher',
        key: 'publisher_id'
      }
    },
    book_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'book',
        key: 'book_id'
      }
    }
  }, {
    sequelize,
    tableName: 'bap',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_bap",
        unique: true,
        fields: [
          { name: "bap_id" },
        ]
      },
    ]
  });
};
