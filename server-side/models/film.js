'use strict';

module.exports = (sequelize, DataTypes) => {
  let models = sequelize.models;

  var Model = sequelize.define('film', {
    film_id: {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
    title: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    release_year: {
      type: DataTypes.INTEGER,
    },
    rental_duration: {
      type: DataTypes.INTEGER,
    },
    rental_rate: {
      type: DataTypes.DOUBLE,
    },
    length: {
      type: DataTypes.INTEGER,
    },
    replacement_cost: {
      type: DataTypes.DOUBLE,
    },
    rating: {
      type: DataTypes.STRING,
    },
    last_update: {
      type: DataTypes.DATE,
    },
  }, {
    classMethods: {
      associate: () => {
        Model.belongsTo(models.language, {
          foreignKey: 'language_id',
          targetKey: 'language_id',
          as: 'rellanguage',
        });
        
      }
    },
    tableName: 'film',
    underscored: true,
    timestamps: false,
  });

  return Model;
};

