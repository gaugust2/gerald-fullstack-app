const championRouter = require('express').Router()
const Champion = require('../models/champion')

championRouter.get('/', async (request, response) => {
    const objects = await Champion.find({})
    const championNames = objects.map(object => object.name)
    response.json(championNames)
})

championRouter.get('/:name', async (request, response) => {
    //const name = JSON.stringify(request.params.name).toLowerCase()
    const name = request.params.name

    const object = await Champion.findOne({name:name})
    response.json(object)
})

//Delete this post method later
//This function is for inserting a whole json document into database
 championRouter.post('/', async (request, response) => {
    const result = Object.values(request.body)

    result.forEach(element => {
        Champion.insertOne(element, function (error, data) {

        })
    })
    
})

module.exports = championRouter