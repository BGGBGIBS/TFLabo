const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('library', {
    library_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    library_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    library_location: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'library',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_library",
        unique: true,
        fields: [
          { name: "library_id" },
        ]
      },
    ]
  });
};
