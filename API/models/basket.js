const Sequelize = require('sequelize');
var DataTypes = require('sequelize');

module.exports = function(sequelize) {
  return sequelize.define('basket', {
    basket_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'customer',
        key: 'customer_id'
      }
    },
    basket_count: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'basket',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_basket",
        unique: true,
        fields: [
          { name: "basket_id" },
        ]
      },
    ]
  });
};
