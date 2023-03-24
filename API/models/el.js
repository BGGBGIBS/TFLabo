const { DataTypes } = require('sequelize');
module.exports = function(sequelize) {
  return sequelize.define('el', {
    el_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    el_count: {
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
    library_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'library',
        key: 'library_id'
      }
    }
  }, {
    sequelize,
    tableName: 'el',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_el",
        unique: true,
        fields: [
          { name: "el_id" },
        ]
      },
    ]
  });
};
