const fetch = require('node-fetch')
const weatherRouter = require('express').Router()
const config = require('../utils/config')

weatherRouter.get('/:city', async (request, response) => {
    try {
        const city = request.params.city
        const weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${config.OPENWEATHER_API_KEY}`)
        const weatherData = await weather.json()
    
        if (weatherData.cod === '404') {
          response.status(404).json({ error: 'City not found' });
        } else {
          const filteredData = filteredWeatherData(weatherData)
          response.json(filteredData)
        }
      } catch (error) {
        response.status(500).json({ error: 'Internal server error' });
      }
})

const filteredWeatherData = (data) => {
    const object = {
        city: data.name,
        temperature: convertToCelsius(data.main.temp),
        feelsLike: convertToCelsius(data.main.feels_like),
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        icon: data.weather[0].icon
    }
    return object
}

function convertToCelsius(temperature){
    return Math.round((temperature - 273.15) * 100)/100
}

module.exports = weatherRouter