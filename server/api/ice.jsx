const express = require('express')
const programsRouter = express.Router()
const { Program, Ice } = require('../db')

programsRouter.get('/', async (req, res, next) => {
  try {
    res.json(await PromiseRejectionEvent.findAll())
  } catch (err) {
    next(err)
  }
})

module.exports = programsRouter
