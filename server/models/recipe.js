let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

let schema = new Schema({
    label: { type: String, required: true},
    imageUrl: { type: String},
    url: { type: String},
    servings: { type: String},
    dietLabels: { type: String},
    healthLabels: { type: String},
    indredients: { type: String},
    calories: { type: String}

})



module.exports = mongoose.model('Recipe', schema)