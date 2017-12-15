let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let models = require('../config/constants').models

let schema = new Schema({
    monday: {type: Object},
    tuesday: {type: Object},
    wednesday: {type: Object},
    thursday: {type: Object},
    friday: {type: Object},
    saturday: {type: Object},
    sunday: {type: Object},
    creatorId: {type: ObjectId, ref: models.user.name, required: true}

})

module.exports = mongoose.model('calendar', schema)