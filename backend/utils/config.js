require('dotenv').config()

const PORT = process.env.PORT

const OPENWEATHER_API_KEY = process.env.WEATHER_API_KEY

const MONGODB_LINK = process.env.MONGODB_LINK

module.exports = {
    PORT,
    OPENWEATHER_API_KEY,
    MONGODB_LINK
}