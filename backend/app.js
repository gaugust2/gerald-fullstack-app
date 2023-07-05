const express = require('express')
const app = express()
const cors = require('cors')
const weatherRouter = require('./controllers/weatherData')
const config = require('./utils/config')
const {info, error} = require('./utils/logger')
const middleware = require('./utils/middleware')

app.use(express.json())
app.use(cors())
app.use(middleware.requestLogger)
//Important that requestlogger is used before using the weatherRouter
app.use('/api/weather', weatherRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

app.get('/', (request, response) => {
    response.send('<h1>welcome to the first request</h1>')
})

module.exports = app