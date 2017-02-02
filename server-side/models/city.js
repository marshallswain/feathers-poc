'use strict';

module.exports = (sequelize, DataTypes) => {
  let models = sequelize.models;

  var Model = sequelize.define('city', {
    city_id: {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
    city: {
      type: DataTypes.STRING,
    },
    last_update: {
      type: DataTypes.DATE,
    },
  }, {
    classMethods: {
      associate: () => {
        Model.belongsTo(models.country, {
          foreignKey: 'country_id',
          targetKey: 'country_id',
          as: 'relcountry',
        });
        
      }
    },
    tableName: 'city',
    underscored: true,
    timestamps: false,
  });

  return Model;
};

