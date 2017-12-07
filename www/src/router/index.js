import Vue from 'vue'
import Router from 'vue-router'
import Results from 'components/Results'
import Login from 'components/Login'

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
  }]
  
})
