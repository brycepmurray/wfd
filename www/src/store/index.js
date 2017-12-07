import axios from 'axios'
import vue from 'vue'
import vuex from 'vuex'
import router from 'router'
import debug from 'util'

let api = axios.create({
  baseURL: 'http://localhost:3000/api/',
  timeout: 2000,
  withCredentials: true
})

let auth = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 2000,
  withCredentials: true
})
vue.use(vuex)

var store = new vuex.Store({
  state: {
    error: {},
    user: {},
    menus: []
  },
  mutations: {
    setUser(state, user) {
      state.user = user}
  },

  actions: {
    //LOGIN FUNCTIONS
    login({ commit, dispatch }, payload) {

      auth.post('login', payload)
        .then(res => {
          commit('setUser', res.data.data)
          router.push({ name: 'Results' })
          console.log(res)
        })
        .catch(err => {
          commit('handleError', err)
        })
    },
    register({ commit, dispatch }, payload) {debugger

      auth.post('register', payload)
        .then(res => {
          commit('setUser', res.data.data)
          router.push({ name: 'Results' })
          console.log('User account successfully created')
        })
        .catch(err => {
          commit('handleError', err)
        })

    },
    logout({ commit, dispatch }) {
      auth.delete('logout')
        .then(res => {
          commit('setUser', {})
          router.push({ name: 'Login' })
          console.log('User session terminated')
        })
        .catch(err => {
          commit('handleError', err)
        })

    },
    authenticate({ commit, dispatch }) {
      auth.get('authenticate')
        .then(res => {

          router.push({ name: 'Results' })
          commit('setUser', res.data.data)
        })
        .catch(err => {

          commit('handleError', err)
          router.push({ name: 'Login' })
        })

    }

  }
})


export default store
