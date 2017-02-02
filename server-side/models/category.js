'use strict';

module.exports = (sequelize, DataTypes) => {
  let models = sequelize.models;

  var Model = sequelize.define('category', {
    category_id: {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
    name: {
      type: DataTypes.STRING,
    },
    last_update: {
      type: DataTypes.DATE,
    },
  }, {
    classMethods: {
      associate: () => {
      }
    },
    tableName: 'category',
    underscored: true,
    timestamps: false,
  });

  return Model;
};

