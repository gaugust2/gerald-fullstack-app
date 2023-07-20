const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')
const weatherRouter = require('./controllers/weatherData')
const championRouter = require('./controllers/championData')
const logger = require('./utils/logger')
const middleware = require('./utils/middleware')
const config = require('./utils/config')
const mongoose = require('mongoose')
const bookRouter = require('./controllers/bookData')
const gtaRouter = require('./controllers/gtaData')
const minecraftRouter = require('./controllers/minecraftData')
const basketballRouter = require('./controllers/basketballData')

mongoose.set('strictQuery', false)

logger.info(`connecting to ${config.MONGODB_LINK}`)

mongoose.connect(config.MONGODB_LINK)
    .then(() => {
        logger.info('connected to MongoDB')
    })
    .catch((error) => {
        logger.error('error connecting to MongoDB:', error.message)
    })

app.use(express.json())//Add {limit: '50mb'} inside when entering large json files
app.use(cors())
app.use(middleware.requestLogger)

app.use(express.static(path.join(__dirname, 'build')))

//Important that requestlogger is used before using the weatherRouter
app.use('/api/weather', weatherRouter)
app.use('/api/champions', championRouter)
app.use('/api/books', bookRouter)
app.use('/api/gta', gtaRouter)
app.use('/api/minecraft', minecraftRouter)
app.use('/api/basketball', basketballRouter)

//Very important that the router paths are defined before this next line
app.get('*', async(request, response) => {
    response.sendFile(path.join(__dirname, 'build', 'index.html'))
})




app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app