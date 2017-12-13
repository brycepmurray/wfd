let Users = require('../models/user')

module.exports = {
    shoppingList: {
        path: '/shopping',
        reqType: 'get',
        method(req, res, next) {
            let action = 'Find User Shopping List'
            Ingredient.find({ creatorId: req.session.uid })
                .then(recipe => {
                    res.send(handleResponse(action, ingredient))
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