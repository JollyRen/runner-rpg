const { Sequelize, DataTypes, Model } = require('sequelize')
const db = require('../database')

class Ice extends Model {}

Ice.init(
  {
    //create db info
  },
  {
    modelName: 'Program',
  }
)

module.exports = Ice
