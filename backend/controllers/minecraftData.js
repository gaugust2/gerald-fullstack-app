const minecraftRouter = require('express').Router()
const Food = require('../models/minecraftFood')






minecraftRouter.get('/foods/:id', async(request, response) => {
    const id = request.params.id

    const object = await Food.findOne({id:id})
    response.json(object)

})

minecraftRouter.get('/foods', async (request, response) => {
    const objects = await Food.find({})

    const foodNames = objects.map(object => object.name)
    response.json(foodNames)
})


minecraftRouter.post('/', async (request, response) => {
    const result = Object.values(request.body)

    result.forEach(element => {
        const food = new Food(element)
        const savedFood = food.save()
    })
    
})


module.exports = minecraftRouter