const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('warehouse', {
    warehouse_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    warehouse_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    warehouse_location: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'warehouse',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_warehouse",
        unique: true,
        fields: [
          { name: "warehouse_id" },
        ]
      },
    ]
  });
};
