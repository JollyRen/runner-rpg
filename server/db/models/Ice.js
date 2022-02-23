const { Sequelize, DataTypes, Model } = require('sequelize')
const db = require('../database')

class Ice extends Model {}

Ice.init(
  {
    //create db info
  },
  {
    timestamps: false,
    modelName: 'ice',
  }
)

module.exports = Ice
