const { DataTypes } = require('sequelize');
module.exports = function(sequelize) {
  return sequelize.define('ba', {
    ba_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    book_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'book',
        key: 'book_id'
      }
    },
    author_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'author',
        key: 'author_id'
      }
    }
  }, {
    sequelize,
    tableName: 'ba',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_ba",
        unique: true,
        fields: [
          { name: "ba_id" },
        ]
      },
    ]
  });
};
