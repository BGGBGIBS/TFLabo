const Sequelize = require('sequelize');
var DataTypes = require('sequelize');

module.exports = function(sequelize) {
  return sequelize.define('bw', {
    bw_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    bw_count: {
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
    warehouse_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'warehouse',
        key: 'warehouse_id'
      }
    }
  }, {
    sequelize,
    tableName: 'bw',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_bw",
        unique: true,
        fields: [
          { name: "bw_id" },
        ]
      },
    ]
  });
};
