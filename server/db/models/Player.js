const { Sequelize, DataTypes, Model } = require('sequelize')
const db = require('../database')

class Player extends Model {}

Player.init(
  {
    //create db info
    name: {
      type: DataTypes.STRING,
      defaultValue: 'Omar Naimi',
    },
    alias: {
      type: DataTypes.STRING,
      defaultValue: 'BigO',
    },
    tags: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    memory: {
      type: DataTypes.INTEGER,
      defaultValue: 4,
    },
    meatDmg: {
      type: DataTypes.INTEGER,
      defaultValue: Math.max(10 + this.level * 1.125),
    },
    bits: {
      type: DataTypes.INTEGER,
      defaultValue: 100,
    },
    experience: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    level: {
      type: DataTypes.INTEGER,
      defaultValue: Math.max(Math.floor(8 * Math.log(this.experience + 111) + -40), 1),
    },
  },
  {
    timestamps: false,
    modelName: 'player',
  }
)

module.exports = Player
