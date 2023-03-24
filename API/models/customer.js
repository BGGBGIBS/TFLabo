const { DataTypes } = require('sequelize');
module.exports = function(sequelize) {
  return sequelize.define('customer', {
    customer_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    customer_firstname: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    customer_lastname: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    customer_email: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    customer_address: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    customer_phone: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    customer_birthdate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    customer_password: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'customer',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_customer",
        unique: true,
        fields: [
          { name: "customer_id" },
        ]
      },
    ]
  });
};
