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
      // type: DataTypes.ARRAY(DataTypes.STRING),
      type: DataTypes.STRING,
      validate: {
        isIn: [['Killer', 'Decryptor', 'Wallbreaker']],
      },
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
    // isActive: {
    //   type: DataTypes.BOOLEAN,
    //   defaultValue: false,
    // },
    // isInstalled: {
    //   type: DataTypes.BOOLEAN,
    //   defaultValue: false,
    // },
    // isTrashed: {
    //   type: DataTypes.BOOLEAN,
    //   defaultValue: false,
    // },
  },
  {
    timestamps: false,
    modelName: 'program',
  }
)

module.exports = Program
