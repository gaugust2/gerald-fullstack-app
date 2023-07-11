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

gtaRouter.get('/:name', async (request,response) => {
    const name = request.params.name

    database.collection('gta-weapons').findOne({name:name}, function (error, data) {
        if (error) {
            response.send(error)
        } else {
            response.json(data)
        }
    })
})

//Initial post method for formatting and entering data into database
gtaRouter.post('/', async (request, response) => {
    const result = Object.values(request.body)
    console.log(Object.keys(request.body)[0]) //This gives the name of the element

    let i = 0
    result.forEach(element => {
        element.name = Object.keys(request.body)[i]
        database.collection('gta-weapons').insertOne(element, function (error, data) {

        })
        i++
    });
    
})

module.exports = gtaRouter