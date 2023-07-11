const mongoose = require('mongoose')

const championSchema = new mongoose.Schema({
    version:String,
    id:String,
    key:String,
    name:String,
    title:String,
    blurb:String,
    info:Object,
    image:Object,
    tags:Array,
    partype:String,
    stats:Object

})


module.exports = mongoose.model('Champion', championSchema)