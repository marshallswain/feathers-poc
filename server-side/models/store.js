'use strict';

module.exports = (sequelize, DataTypes) => {
  let models = sequelize.models;

  var Model = sequelize.define('store', {
    store_id: {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
    last_update: {
      type: DataTypes.DATE,
    },
  }, {
    classMethods: {
      associate: () => {
        Model.belongsTo(models.staff, {
          foreignKey: 'manager_staff_id',
          targetKey: 'staff_id',
          as: 'relstaff',
        });
        
        Model.belongsTo(models.address, {
          foreignKey: 'address_id',
          targetKey: 'address_id',
          as: 'reladdress',
        });
        
      }
    },
    tableName: 'store',
    underscored: true,
    timestamps: false,
  });

  return Model;
};

