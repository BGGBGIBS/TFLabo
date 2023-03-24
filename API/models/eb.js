const { DataTypes } = require('sequelize');
module.exports = function(sequelize) {
  return sequelize.define('eb', {
    bb_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    book_count: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    edition_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'edition',
        key: 'edition_id'
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
    tableName: 'eb',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_bb",
        unique: true,
        fields: [
          { name: "bb_id" },
        ]
      },
    ]
  });
};
