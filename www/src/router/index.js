import Vue from 'vue'
import Router from 'vue-router'
import Results from 'components/Results'
import Login from 'components/Login'
import Meal from 'components/Meal'
import CookBook from 'components/CookBook'
import Shopping from 'components/Shopping'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Results',
      component: Results
    }, {
      path: '/login',
      name: 'Login',
      component: Login
    }, {
      path: '/meal',
      name: 'Meal',
      component: Meal
    }, {
      path: '/cookbook',
      name: 'CookBook',
      component: CookBook
    }, {
      path: '/shopping',
      name: 'Shopping',
      component: Shopping
    }]

})