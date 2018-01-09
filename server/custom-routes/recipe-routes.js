
let Users = require('../models/user')
let Recipe = require('../models/recipe')
let Weeks = require('../models/week')

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
    },

    userShopList: {
      path: '/savedays',
      reqType: 'put',
      method(req, res, next) {
          let action = 'Save recipe to day'
          Weeks.findOneAndUpdate({creatorId: req.session.uid}, req.body)
              .then(week => {
                  res.send(handleResponse(action, week))
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