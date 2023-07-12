const mongoose = require('mongoose')

const Schema = mongoose.Schema
const foodSchema = new Schema({
    id:Number,
    name:{
        type:String
    },
    stackSize:String,
    displayName:String,
    foodPoints: Number,
    saturation:Number,
    effectiveQuality:Number,
    saturationRatio:Number
})



module.exports = mongoose.model('Food', foodSchema, 'minecraft-foods')