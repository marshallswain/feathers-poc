'use strict';

module.exports = (sequelize, DataTypes) => {
  let models = sequelize.models;

  var Model = sequelize.define('actor', {
    actor_id: {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
    first_name: {
      type: DataTypes.STRING,
    },
    last_name: {
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
    tableName: 'actor',
    underscored: true,
    timestamps: false,
  });

  return Model;
};

