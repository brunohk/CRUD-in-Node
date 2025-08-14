import express from 'express'
import { Sequelize } from 'sequelize'
import config from './config/index.js'
import PersonController from './api/controller/person.js'
import PersonService from './api/service/person.js'
import PersonModel from './api/model/person.js'

const app = express()
const sequelize = new Sequelize('pd', 'kunieda', '', config.development.postgres.options)
const personService = new PersonService()
const personController = new PersonController(personService)
PersonModel.init(sequelize)

app.use(express.json());

app.post('/user', async (req, res) => {
  try {
    const user = await personController.saveUser(req);
    res.status(201).send(user);
  } catch (err) {
    console.error('Error saving user:', err);
    res.status(500).json({ message: 'Something went wrong' });
  }
})

app.get('/user/:id', async (req, res) => {
  const user = await personController.getUserById(req, res)
  
  if (!user) {
    return res.status(404).send({error: `User not found`})
  }

  res.send(user)
})

app.get('/users', async (req, res) => {
  const user = await personController.getUsers(req, res)
  
  if (user.length === 0) {
    return res.status(404).send({error: `User not found`})
  }

  res.send(user)
})

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