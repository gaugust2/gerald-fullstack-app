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
    database.collection('champions').findOne({}, function(error, data){
        if(error){
            response.send(error)
        } else{
            response.json(data)
        }
    })
})

championRouter.get('/:name', async (request, response) => {
    const name = request.params.name
    database.collection('champions').findOne({}, function(error, data) {
        if(error){
            response.send(error)
        } else{
            response.json(data[name])
        }
    })
})

module.exports = championRouter