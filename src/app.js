import express from 'express'
import { Sequelize } from 'sequelize'
import config from './config/index.js'

const app = express()
const sequelize = new Sequelize('pd', 'kunieda', '', config.development.postgres.options)

app.listen(3000, async () => {
  console.log("API Started!!! Porta: " + 3000)

  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully');
    config.development.postgres.client = sequelize
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
});