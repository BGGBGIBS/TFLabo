const Sequelize = require('sequelize');
var DataTypes = require('sequelize');

module.exports = function(sequelize) {
  return sequelize.define('publisher', {
    publisher_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    publisher_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    publisher_address: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    publisher_phone: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    publisher_url: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'publisher',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_pubisher",
        unique: true,
        fields: [
          { name: "publisher_id" },
        ]
      },
    ]
  });
};
