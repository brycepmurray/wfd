import Vue from 'vue'
import Router from 'vue-router'
import Results from 'components/Results'
import Login from 'components/Login'
import Meal from 'components/Meal'
import Favorites from 'components/Favorites'
import Shopping from 'components/Shopping'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Results',
      component: Results
    },{
      path: '/login',
      name: 'Login',
      component: Login
  },{
    path: '/meal',
    name: 'Meal',
    component: Meal
  },{
    path: '/favorites',
    name: 'Favorites',
    component: Favorites
  },{
    path: '/shopping',
    name: 'Shopping',
    component: Shopping
}]
  
})