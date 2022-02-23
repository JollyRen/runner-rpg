const { Sequelize, DataTypes, Model } = require('sequelize')
const db = require('../database')

class Equipment extends Model {}

Equipment.init(
  {
    //create db info
    name: {
      type: DataTypes.STRING,
      defaultValue: '',
    },
    cost: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    description: {
      type: DataTypes.TEXT,
      defaultValue: '',
    },
  },
  {
    timestamps: false,
    modelName: 'equipment',
  }
)

module.exports = Equipment
