const championRouter = require('express').Router()
const config = require('../utils/config')
const mongoose = require('mongoose')

mongoose.set('strictQuery', true);
mongoose.connect(config.MONGODB_LINK);
const database = mongoose.connection
database.on('error', (error) => { console.log(error) })
database.once('connected', () => {
    console.log('Database Connected');
})


championRouter.get('/', async (request, response) => {
    const objects = await database.collection('champions').find({}).toArray()
    const championNames = objects.map(object => object.name)
    response.json(championNames)
})

championRouter.get('/:name', async (request, response) => {
    //const name = JSON.stringify(request.params.name).toLowerCase()
    const name = request.params.name
    database.collection('champions').findOne({name:name}, function (error, data) {
        if (error) {
            response.send(error)
        } else {
            response.json(data)
        }
    })
})

//Delete this post method later
//This function is for inserting a whole json document into database
 championRouter.post('/', async (request, response) => {
    const result = Object.values(request.body)

    result.forEach(element => {
        database.collection('champions').insertOne(element, function (error, data) {

        })
    });
    
})

module.exports = championRouter