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

// used to make an external api call to get recipes
let recipeApi = axios.create({
    baseURL: 'https://api.edamam.com/search?q=',
    timeout: 3000

})

vue.use(vuex)

var store = new vuex.Store({
    state: {
        cookBook: [],
        results: [],
        err: {}
    },
    mutations: {
        setResults(state, results) {
            state.results = results
        },
        handleError(state, err) {
            state.err = err
        },
        setCookBook(state, recipe) {
            debugger
            state.cookBook = recipe
        }


    },

    actions: {
        getRecipes({ commit, dispatch }, payload) {
            recipeApi(payload + '&app_id=d774e5c8&app_key=907d1f051ac9fd1cf1fe2484c4e002b5&from=0&to=100')
                .then(data => {
                    commit("setResults", data.data.hits)
                    console.log(data)
                })
                .catch(err => {
                    commit('handleError', err)
                })
        },
        addToCookBook({ commit, dispatch }, recipe) {
            debugger
            api.post("recipes", recipe._id)
                .then(res => {
                    dispatch("getCookBook")
                })
                .catch(err => {
                    commit('handleError', err)
                })
        },


        getCookBook({ commit, dispatch }) {
            debugger
            api("cookbook")
                .then(res => {
                    commit('setCookBook', res.data.data)
                })
                .catch(err => {
                    commit('handleError', err)
                })
        },




        //Login and Register actions
        register({ commit, dispatch }, payload) {
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
        login({ commit, dispatch }, payload) {
            debugger
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