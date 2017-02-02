'use strict';

module.exports = (sequelize, DataTypes) => {
  let models = sequelize.models;

  var Model = sequelize.define('inventory', {
    inventory_id: {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
    store_id: {
      type: DataTypes.INTEGER,
    },
    last_update: {
      type: DataTypes.DATE,
    },
  }, {
    classMethods: {
      associate: () => {
        Model.belongsTo(models.film, {
          foreignKey: 'film_id',
          targetKey: 'film_id',
          as: 'relfilm',
        });
        
      }
    },
    tableName: 'inventory',
    underscored: true,
    timestamps: false,
  });

  return Model;
};

