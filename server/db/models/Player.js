const { Sequelize, DataTypes, Model } = require('sequelize')
const db = require('../database')

class Player extends Model {}

Player.init(
  {
    //create db info
  },
  {
    modelName: 'Program',
  }
)

module.exports = Player
