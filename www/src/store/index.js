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

let recipeApi = axios.create({
    baseURL: 'https://api.edamam.com/search?q=',
    timeout: 3000,
    withCredentials: true

})

vue.use(vuex)

var store = new vuex.Store({
            state: {
                myRecipes: [],
                results: []
            },
            mutations: {
                setResults(state, results) {
                    state.results = results
                }
            },

            actions: {
                getRecipes({ commit, dispatch }, recipe) {
                   
                    var url = 'https://api.edamam.com/&app_id=878f5fef&app_key=0fb14457c6f7568967cea5fdf2757a7b&search?q=' + recipe;
                    
                    // $.get(url).then(data => {
                    //         $('#get-recipe-button').text('LOADING....');

                    //         return $.getJSON(apiUrl).then(function(response) {
                    //             var recipeList = response.results.map(function(recipe) {
                    //                 return {
                    //                     recipeName: recipe.label,
                    //                     recipeImageUrl: recipe.imageUrl,
                    //                     recipeUrl: recipe.url,
                    //                     recipeServings: recipe.yield,
                    //                     recipeDietLabels: recipe.dietLabels[],
                    //                     recipeHealthLabels: recipe.healthLabels[],
                    //                     recipeIndredients: recipe.ingredientLines[],
                    //                     recipeCalories: recipe.calories

                    //                 };
                    //             })
                    //             $('#get-recipe-button').text('GET RECIPES');
                    //             return recipeList;
                    //         })
                        },
                        register({ commit, dispatch }, payload) {
                            debugger

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