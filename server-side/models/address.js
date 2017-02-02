'use strict';

module.exports = (sequelize, DataTypes) => {
  let models = sequelize.models;

  var Model = sequelize.define('address', {
    address_id: {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
    address: {
      type: DataTypes.STRING,
    },
    address2: {
      type: DataTypes.STRING,
    },
    district: {
      type: DataTypes.STRING,
    },
    postal_code: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
    },
    last_update: {
      type: DataTypes.DATE,
    },
  }, {
    classMethods: {
      associate: () => {
        Model.belongsTo(models.city, {
          foreignKey: 'city_id',
          targetKey: 'city_id',
          as: 'relcity',
        });
        
      }
    },
    tableName: 'address',
    underscored: true,
    timestamps: false,
  });

  return Model;
};

