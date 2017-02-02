'use strict';

module.exports = (sequelize, DataTypes) => {
  let models = sequelize.models;

  var Model = sequelize.define('payment', {
    payment_id: {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
    amount: {
      type: DataTypes.DOUBLE,
    },
    payment_date: {
      type: DataTypes.DATE,
    },
  }, {
    classMethods: {
      associate: () => {
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
        
        Model.belongsTo(models.rental, {
          foreignKey: 'rental_id',
          targetKey: 'rental_id',
          as: 'relrental',
        });
        
      }
    },
    tableName: 'payment',
    underscored: true,
    timestamps: false,
  });

  return Model;
};

