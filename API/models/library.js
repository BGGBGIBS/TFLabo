const { DataTypes } = require('sequelize');
module.exports = function(sequelize) {
  return sequelize.define('library', {
    library_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    library_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    library_location: {
      type: DataTypes.STRING(50),
      allowNull: false
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
