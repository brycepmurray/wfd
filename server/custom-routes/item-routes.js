let Users = require('../models/user')
let Item = require('../models/item')

module.exports = {
    userShopList: {
        path: '/shopping',
        reqType: 'get',
        method(req, res, next) {
            let action = 'Find Shopping List'
            Item.find({ creatorId: req.session.uid })
                .then(item => {
                    res.send(handleResponse(action, item))
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