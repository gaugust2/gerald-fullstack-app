const mongoose = require('mongoose')

const Schema = mongoose.Schema
const weaponSchema = new Schema({
    name:{
        type:String
    }
})



module.exports = mongoose.model('Weapon', weaponSchema, 'gta-weapons')