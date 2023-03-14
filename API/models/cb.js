const Sequelize = require('sequelize');
var DataTypes = require('sequelize');

module.exports = function(sequelize) {
  return sequelize.define('cb', {
    cb_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    book_count: {
      type: DataTypes.INTEGER,
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
    basket_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'basket',
        key: 'basket_id'
      }
    }
  }, {
    sequelize,
    tableName: 'cb',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_cb",
        unique: true,
        fields: [
          { name: "cb_id" },
        ]
      },
    ]
  });
};
