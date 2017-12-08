let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

let schema = new Schema({
    recipeName: { type: String, required: true },
    recipeImageUrl: {type: String},
    recipeUrl: {type: String},
    recipeServings:{type: String},
    recipeDietLabels: {type: String},
    recipeHealthLabels:{type: String},
    recipeIndredients:{type: String},
    recipeCalories: {type: String}
    
})



module.exports = mongoose.model('Result', schema)