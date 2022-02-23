const { Sequelize, DataTypes, Model } = require('sequelize')
const db = require('../database')

class Program extends Model {}

Program.init(
  {
    //create db info
  },
  {
    modelName: 'Program',
  }
)

module.exports = Program
