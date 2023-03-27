const { DataTypes } = require('sequelize');
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
      allowNull: false
    },
    publisher_address: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    publisher_phone: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    publisher_url: {
      type: DataTypes.STRING(50),
      allowNull: false
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
