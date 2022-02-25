const { Sequelize, DataTypes, Model } = require('sequelize')
const db = require('../database')

const Ice = db.define(
  'ice',
  {
    //create db info
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
    },
    cost: {
      type: DataTypes.INTEGER,
    },
    strength: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    type: {
      type: DataTypes.STRING,
      validate: {
        isIn: [['Sentry', 'Firewall', 'Codegate']],
      },
    },
    // isDefeated: {
    //   type: DataTypes.BOOLEAN,
    //   defaultValue: false,
    // },
  },
  {
    timestamps: false,
  }
)

module.exports = Ice
