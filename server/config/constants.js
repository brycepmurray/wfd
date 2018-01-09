const actions = {
  create: 'Create',
  update: 'Update',
  remove: 'Remove',
  find: 'Find',
  findAll: 'Find All'
}

const models = {
  
  user: {
    name: 'User',
    endpoint: 'users',
    preventDefaultApi: true,
    useCustomRoutes: true
  },
  recipe: {
    name: 'Recipe',
    endpoint:'recipes',
    useCustomRoutes: true
  },
  item: {
    name: 'Item',
    endpoint: 'items',
    useCustomRoutes: true
  },
  week: {
    name: 'Week',
    endpoint: 'weeks',
    
  }
}


module.exports = {
  actions,
  models
}