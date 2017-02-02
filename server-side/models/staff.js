'use strict';

module.exports = (sequelize, DataTypes) => {
  let models = sequelize.models;

  var Model = sequelize.define('staff', {
    staff_id: {
      type: DataTypes.INTEGER,
      primaryKey: true 
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
    store_id: {
      type: DataTypes.INTEGER,
    },
    active: {
      type: DataTypes.BOOLEAN,
    },
    username: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    last_update: {
      type: DataTypes.DATE,
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
    tableName: 'staff',
    underscored: true,
    timestamps: false,
  });

  return Model;
};

