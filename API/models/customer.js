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
      allowNull: false
    },
    customer_lastname: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    customer_email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true
    },
    customer_address: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    customer_phone: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    customer_birthdate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    customer_password: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    customer_role: {
      type: DataTypes.STRING(15),
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
