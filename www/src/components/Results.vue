<template>
    <div class="container-fluid">
        <!-- Modal -->
        <div id="myModal" class="modal fade" role="dialog" v-if="activeRecipe.recipe">
            <div class="modal-dialog">

                <!-- Modal content-->
                <div class="modal-content">
                    <div class="modadl-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h1 class="modal-title">
                            <strong>{{activeRecipe.recipe.label}}</strong>
                        </h1>
                       
                        <div class="row text-right">
                            <div class="col-xs-6">
                        <img class="card-img-top" :src="activeRecipe.recipe.image" alt="Card image cap">
                    </div>
                    <div class="col-xs-6 hashtag">
                            <h5 v-for="i in activeRecipe.recipe.healthLabels">#{{i}}</h5>                            
                    </div>
                </div>     
            </div>

                    <div class="modal-body">
                        <h3>Ingredients:</h3>
                        <h6> (click <span class="glyphicon glyphicon-plus"></span> to add to shopping list)</h6>
                        <ul>
                            <h5 class="modal-title" v-for="i in activeRecipe.recipe.ingredientLines">
                                <li>{{i}}
                                    <span @click='addToShopList(i)' class="glyphicon glyphicon-plus"></span> 
                                </li>     
                            </h5>
                        </ul>
                    </div>
                    <div class="modal-footer">
                        <h5>Servings: {{activeRecipe.recipe.yield}}</h5>
                        <h5>Calories: {{Math.floor(activeRecipe.recipe.calories)}}</h5>
                        <h5 v-for="i in activeRecipe.recipe.dietLabels">{{i}}</h5>
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                        <a :href="activeRecipe.recipe.url" target="_blank" class="btn btn-primary">View Directions
                            <span class="glyphicon glyphicon-hand-right"></span>
                        </a>
                    </div>
                </div>

            </div>
        </div>
        <div>
            <form @submit.prevent="getRecipes()">
                <input class="search" type="text" v-model="recipe" placeholder="Search millions of recipes...">
                <button type="submit" class="submit btn btn-default">Search</button>
            </form>
        </div>
        <div class="row text-center">
            <div @click="setActiveRecipe(result)" class="card col-lg-8" style="width: 28rem;" v-for="result in results" draggable="true"
                v-on:dragstart.capture="moving">
                <img data-toggle="modal" data-target="#myModal" class="card-img-top" :src="result.recipe.image" alt="Card image cap">
                <div class="card-block">
                    <a>
                        <h5 data-toggle="modal" data-target="#myModal" class="card-title">
                            <strong>{{result.recipe.label}}</strong>
                        </h5>
                    </a>
                    <p class="card-text" v-if="result.recipe.source == 'No Recipes'">Yummy!!</p>
                    <p class="card-text" v-else>{{result.recipe.source}}</p>
                    <a :href="result.recipe.url" target="_blank" class="btn btn-primary wide">View Recipe</a>

                    <button class="btn btn-warning wide" @click="addToCookBook(result)">Add to Cookbook</button>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Calendar from '../components/Calendar'
    export default {
        name: 'results',
        data() {
            return {
                recipe: "",
                activeRecipe: {}
            }
        },
        mounted() { },
        computed: {
            results() {
                return this.$store.state.results

            },
            cookBook() {
                return this.$store.state.cookBook
            }
        },
        methods: {
            setActiveRecipe(result) {debugger
                this.activeRecipe = result
            },


            getRecipes() {
                this.$store.dispatch('getRecipes', this.recipe)
            },
            addToCookBook(result) {
                for (var i = 0; i < this.cookBook.length; i++) {
                    var recipe = this.cookBook[i]
                    if (result.recipe.url == recipe.url)
                        return
                }
                var recipe = {
                    label: result.recipe.label,
                    imageUrl: result.recipe.image,
                    url: result.recipe.url,
                    servings: result.recipe.yield,
                    dietLabels: result.recipe.dietLabels,
                    healthLabels: result.recipe.healthLabels,
                    indredients: result.recipe.ingredientLines,
                    calories: result.recipe.calories
                }
                this.$store.dispatch('addToCookBook', recipe)
            },

            addToShopList(i) {
                var item = {
                    description: i
                }
                this.$store.dispatch('addToShopList', item)
            },



            moving(event) {
                console.log(event)
                event.dataTransfer.setData('text/javascript', JSON.stringify(this.item))
                console.log('We are moving')
            }
        },
        components: {
            Calendar
        }
    }
</script>

<style scoped>
    .container-fluid {
        text-align: center;
        width: 80%;
    }

    .hashtag{
        padding-left: 10px
    }

    .modal-body {
        text-align: left
    }

    .row {
        width: 100%
    }

    .wide {
        width: 100%
    }

    .card {
        padding: 20px;
        margin: 10px;
        height: 400px;
        background-color: rgba(255, 255, 255, 0.787);
        box-shadow: 5px 5px rgb(138, 138, 138);
        border-radius: 6%
    }

    .card:hover {
        cursor: pointer;
        background-color: white;
    }

    .card-img-top {
        width: 200px;
        height: 200px;
        border-radius: 6%
    }

    .search {
        width: 30vw;
        color: black;
        background-color: rgb(255, 255, 255);
        font-size: 2rem;
        height: 3rem;
        margin-top: 10px
    }

    .submit {
        height: 3rem;
        margin-right: 35%;
        margin-top: 10px
    }

    .glyphicon:hover {
        color: gold
    }

    .glyphicon-plus {
        cursor: pointer
    }

    .static {
        position: fixed;
        right: 35px;
        z-index: 1;
    }
</style>