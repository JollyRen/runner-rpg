'use strict'

const Sequelize = require('sequelize')
const pkg = require('../../package.json')

console.log('Opening database connection')

const db = new Sequelize(`postgres:localhost:5432/${pkg.name}`, {
  logging: false,
})

module.exports = db
