const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  return sequelize.define('author', {
    author_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    author_firstname: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    author_lastname: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    author_email: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    author_address: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    author_url: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    author_birthdate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'author',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_author",
        unique: true,
        fields: [
          { name: "author_id" },
        ]
      },
    ]
  });
};
