//let Menus = require('../models/menu')

// module.exports = {
//   userMenus: {
//     path: '/userMenus',
//     reqType: 'get',
//     method(req, res, next){
//       let action = 'Find User Menus'
//       Menus.find({creatorId: req.session.uid})
//         .then(menus => {
//           res.send(handleResponse(action, menus))
//         }).catch(error => {
//           return next(handleResponse(action, null, error))
//         })
//     }
//   },
// }


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