const weatherRouter = require('express').Router()
const config = require('../utils/config')

weatherRouter.get('/:city', async (request, response) => {
    const city = request.params.city
    const weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${config.OPENWEATHER_API_KEY}`)
    const weatherData = await weather.json()


    const filteredData = filteredWeatherData(weatherData)
    response.json(filteredData)
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