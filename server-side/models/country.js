'use strict';

module.exports = (sequelize, DataTypes) => {
  let models = sequelize.models;

  var Model = sequelize.define('country', {
    country_id: {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
    country: {
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
    tableName: 'country',
    underscored: true,
    timestamps: false,
  });

  return Model;
};

