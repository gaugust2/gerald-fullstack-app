const gtaRouter = require('express').Router()
const Vehicle = require('../models/gtaVehicle')
const Weapon = require('../models/gtaWeapon')

gtaRouter.get('/weapons/:name', async (request,response) => {
    const name = request.params.name

    const object = await Weapon.findOne({name:name})
    response.json(object)
})

gtaRouter.get('/weapons', async(request, response) => {
    const objects = await Weapon.find({})

    const weaponNames = objects.map(object => object.name)
    response.json(weaponNames)
})

gtaRouter.get('/vehicles/:name', async (request, response) => {
    const vehicle = request.params.name

    const object = await Vehicle.findOne({vehicle:vehicle})
    response.json(object)
})

gtaRouter.get('/vehicles', async(request, response) => {
    const objects = await Vehicle.find({})

    const vehicleNames = objects.map(object => object.vehicle)
    response.json(vehicleNames)
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