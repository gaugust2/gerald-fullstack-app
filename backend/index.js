require('dotenv').config()
const express = require('express')
const app = express()

app.use(express.json())

const OPENWEATHER_API_KEY = process.env.WEATHER_API_KEY

app.get('/', (request, response) => {
    response.send('<h1>welcome to the first request</h1>')
})

app.get('/api/weather/:city', async (request, response) => {
    const city = request.params.city
    const weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OPENWEATHER_API_KEY}`)
    const weatherData = await weather.json()
    response.json(weatherData)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})