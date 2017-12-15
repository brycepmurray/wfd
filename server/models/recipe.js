let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let models = require('../config/constants').models

let schema = new Schema({
    label: { type: String, required: true},
    imageUrl: { type: String},
    url: { type: String},
    servings: { type: String},
    dietLabels: [{ type: String}],
    healthLabels: [{ type: String}],
    indredients: [{ type: String}],
    calories: { type: String},
    creatorId: {type: ObjectId, ref: models.user.name, required: true}

})



module.exports = mongoose.model('Recipe', schema)