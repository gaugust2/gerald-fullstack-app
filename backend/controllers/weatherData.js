const weatherRouter = require('express').Router()
const config = require('../utils/config')

weatherRouter.get('/:city', async (request, response) => {
    const city = request.params.city
    const weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${config.OPENWEATHER_API_KEY}`)
    const weatherData = await weather.json()
    response.json(weatherData)
})

module.exports = weatherRouter