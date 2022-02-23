const { Sequelize, DataTypes, Model } = require('sequelize')
const db = require('../database')

class Program extends Model {}

Program.init(
  {
    //create db info
    name: {
      type: DataTypes.STRING,
      defaultValue: '',
      allowNull: false,
    },
    type: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    memorySize: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
      allowNull: false,
    },
    cost: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false,
    },
    strength: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      defaultValue: '',
    },
  },
  {
    timestamps: false,
    modelName: 'program',
  }
)

module.exports = Program
