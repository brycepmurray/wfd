let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let models = require('../config/constants').models

let schema = new Schema({
    description: {type: String, required: true},
    creatorId: {type: ObjectId, ref: models.user.name, required: true}

})



module.exports = mongoose.model('Item', schema)