const { Sequelize, DataTypes, Model } = require('sequelize')
const db = require('../database')

class Npc extends Model {}

Npc.init(
  {
    //create db info
  },
  {
    modelName: 'Program',
  }
)

module.exports = Npc
