let Users = require('../models/user')
let Recipe = require('../models/recipe')

module.exports = {
    userCookBook: {
        path: '/cookbook',
        reqType: 'get',
        method(req, res, next) {
            let action = 'Find User Recipes'
            Recipe.find({ creatorId: req.session.uid })
                .then(recipe => {
                    res.send(handleResponse(action, recipe))
                }).catch(error => {
                    return next(handleResponse(action, null, error))
                })
        }
    }
}
function handleResponse(action, data, error) {
    var response = {
      action: action,
      data: data
    }
    if (error) {
      response.error = error
    }
    return response
  }