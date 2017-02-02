'use strict';

module.exports = (sequelize, DataTypes) => {
  let models = sequelize.models;

  var Model = sequelize.define('rental', {
    rental_id: {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
    rental_date: {
      type: DataTypes.DATE,
    },
    return_date: {
      type: DataTypes.DATE,
    },
    last_update: {
      type: DataTypes.DATE,
    },
  }, {
    classMethods: {
      associate: () => {
        Model.belongsTo(models.inventory, {
          foreignKey: 'inventory_id',
          targetKey: 'inventory_id',
          as: 'relinventory',
        });
        
        Model.belongsTo(models.customer, {
          foreignKey: 'customer_id',
          targetKey: 'customer_id',
          as: 'relcustomer',
        });
        
        Model.belongsTo(models.staff, {
          foreignKey: 'staff_id',
          targetKey: 'staff_id',
          as: 'relstaff',
        });
        
      }
    },
    tableName: 'rental',
    underscored: true,
    timestamps: false,
  });

  return Model;
};

