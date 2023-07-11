const gtaRouter = require('express').Router()
const config = require('../utils/config')
const mongoose = require('mongoose')

mongoose.set('strictQuery', true);
mongoose.connect(config.MONGODB_LINK);
const database = mongoose.connection
database.on('error', (error) => { console.log(error) })
database.once('connected', () => {
    console.log('Database Connected');
})

gtaRouter.get('/weapons/:name', async (request,response) => {
    const name = request.params.name

    database.collection('gta-weapons').findOne({name:name}, function (error, data) {
        if (error) {
            response.send(error)
        } else {
            response.json(data)
        }
    })
})

gtaRouter.get('/weapons', async(request, response) => {
    const objects = await database.collection('gta-weapons').find({}).toArray()
    const weaponNames = objects.map(object => object.name)
    response.json(weaponNames)
})

gtaRouter.get('/vehicles/:name', async (request, response) => {
    const vehicle = request.params.name

    database.collection('gta-vehicles').findOne({vehicle:vehicle}, function (error, data) {
        if (error) {
            response.send(error)
        } else {
            response.json(data)
        }
    })
})

gtaRouter.get('/vehicles', async(request, response) => {
    const objects = await database.collection('gta-vehicles').find({}).toArray()
    const vehiclesNames = objects.map(object => object.vehicle)
    response.json(vehiclesNames)
})

//Initial post method for formatting and entering JSON into database
gtaRouter.post('/', async (request, response) => {
    const result = Object.values(request.body)
    console.log(Object.keys(request.body)[0]) //This gives the name of the element

    let i = 0
    result.forEach(element => {
        element.name = Object.keys(request.body)[i]
        database.collection('gta-weapons').insertOne(element, function (error, data) {

        })
        i++
    })
    
})

//Initial post method for entering vehicles json into database
gtaRouter.post('/vehicles', async (request, response) => {
    const result = Object.values(request.body)

    result.forEach(element => {
        database.collection('gta-vehicles').insertOne(element, function (error, data) {

        })
    })
})

module.exports = gtaRouter