'use strict';

module.exports = (sequelize, DataTypes) => {
  let models = sequelize.models;

  var Model = sequelize.define('film_category', {
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
        
        Model.belongsTo(models.category, {
          foreignKey: 'category_id',
          targetKey: 'category_id',
          as: 'relcategory',
        });
        
      }
    },
    tableName: 'film_category',
    underscored: true,
    timestamps: false,
  });

  return Model;
};

