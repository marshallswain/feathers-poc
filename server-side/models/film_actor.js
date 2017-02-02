'use strict';

module.exports = (sequelize, DataTypes) => {
  let models = sequelize.models;

  var Model = sequelize.define('film_actor', {
    last_update: {
      type: DataTypes.DATE,
    },
  }, {
    classMethods: {
      associate: () => {
        Model.belongsTo(models.actor, {
          foreignKey: 'actor_id',
          targetKey: 'actor_id',
          as: 'relactor',
        });
        
        Model.belongsTo(models.film, {
          foreignKey: 'film_id',
          targetKey: 'film_id',
          as: 'relfilm',
        });
        
      }
    },
    tableName: 'film_actor',
    underscored: true,
    timestamps: false,
  });

  return Model;
};

