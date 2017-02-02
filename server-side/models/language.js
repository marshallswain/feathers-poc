'use strict';

module.exports = (sequelize, DataTypes) => {
  let models = sequelize.models;

  var Model = sequelize.define('language', {
    language_id: {
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
    tableName: 'language',
    underscored: true,
    timestamps: false,
  });

  return Model;
};

