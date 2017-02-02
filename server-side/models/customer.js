'use strict';

module.exports = (sequelize, DataTypes) => {
  let models = sequelize.models;

  var Model = sequelize.define('customer', {
    customer_id: {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
    store_id: {
      type: DataTypes.INTEGER,
    },
    first_name: {
      type: DataTypes.STRING,
    },
    last_name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    activebool: {
      type: DataTypes.BOOLEAN,
    },
    create_date: {
      type: DataTypes.DATE,
    },
    last_update: {
      type: DataTypes.DATE,
    },
    active: {
      type: DataTypes.INTEGER,
    },
  }, {
    classMethods: {
      associate: () => {
        Model.belongsTo(models.address, {
          foreignKey: 'address_id',
          targetKey: 'address_id',
          as: 'reladdress',
        });
        
      }
    },
    tableName: 'customer',
    underscored: true,
    timestamps: false,
  });

  return Model;
};

