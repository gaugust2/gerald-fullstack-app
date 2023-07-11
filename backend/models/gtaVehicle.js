const mongoose = require('mongoose')

const Schema = mongoose.Schema
const vehicleSchema = new Schema({
    vehicle:{
        type:String
    }
})



module.exports = mongoose.model('Vehicle', vehicleSchema, 'gta-vehicles')