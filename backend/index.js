const express = require('express')
const app = express()
const weatherRouter = require('./controllers/weatherData')
const config = require('./utils/config')

app.use(express.json())
app.use('/api/weather', weatherRouter)


app.get('/', (request, response) => {
    response.send('<h1>welcome to the first request</h1>')
})



const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})