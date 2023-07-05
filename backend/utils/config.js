require('dotenv').config()
const PORT = process.env.PORT

const OPENWEATHER_API_KEY = process.env.WEATHER_API_KEY

module.exports = {
    PORT,
    OPENWEATHER_API_KEY
}