const { Sequelize, DataTypes, Model } = require('sequelize')
const db = require('../database')

class Equipment extends Model {}

Equipment.init(
  {
    //create db info
  },
  {
    timestamps: false,
    modelName: 'equipment',
  }
)

module.exports = Equipment
