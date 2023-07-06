const express = require('express')
const app = express()
const cors = require('cors')
const weatherRouter = require('./controllers/weatherData')
const championRouter = require('./controllers/championData')
const logger = require('./utils/logger')
const middleware = require('./utils/middleware')
const config = require('./utils/config')
const mongoose = require('mongoose')

app.use(express.json())
app.use(cors())
app.use(middleware.requestLogger)
//Important that requestlogger is used before using the weatherRouter
app.use('/api/weather', weatherRouter)
app.use('/api/champions', championRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

app.get('/', (request, response) => {
    response.send('<h1>welcome to the first request</h1>')
})

module.exports = app