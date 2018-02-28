<template>
    <div class="container-fluid">
        <!-- Modal -->
        <div id="myModal" class="modal fade" role="dialog" v-if="activeRecipe.recipe">
            <div class="modal-dialog">

                <!-- Modal content-->
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h1 class="modal-title">
                            <strong>{{activeRecipe.recipe.label}}</strong>
                        </h1>

                        <div class="row text-right">
                            <div class="col-xs-6">
                                <img class="card-img-top" :src="activeRecipe.recipe.image" alt="Card image cap">
                            </div>
                            <div class="col-xs-6 hashtag">
                                <h5 class="words" v-for="i in activeRecipe.recipe.healthLabels">#{{i}}</h5>
                            </div>
                        </div>
                    </div>

                    <div class="modal-body">
                        <h3>Ingredients:</h3>
                        <h6 v-if="user.name"> (click
                            <span class="glyphicon glyphicon-plus"></span> to add to shopping list)</h6>
                            <h6 v-else> Please register or login to create a shopping list.</h6>
                        <ul>
                            <h5 v-for="i in activeRecipe.recipe.ingredientLines">
                                <li>{{i}}
                                    <span v-if="user.name" @click='addToShopList(i)' class="glyphicon glyphicon-plus"></span>                                    
                                </li>
                            </h5>
                        </ul>
                    </div>
                    <div class="modal-footer">
                        <h5>Servings: {{activeRecipe.recipe.yield}}</h5>
                        <h5>Calories: {{Math.floor(activeRecipe.recipe.calories)}}</h5>
                        <h5 v-for="i in activeRecipe.recipe.dietLabels">{{i}}</h5>
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                        <a :href="activeRecipe.recipe.url" target="_blank" class="btn hey btn-primary">View Directions
                            <span class="glyphicon glyphicon-new-window"></span>
                        </a>
                    </div>
                </div>

            </div>
        </div>
        <div class="row search-bar">
            <form @submit.prevent="getRecipes()" class="text-center">
                <input class="search" type="text" v-model="recipe" placeholder="Search millions of recipes...">
                <button type="submit" class="submit btn btn-default"><span class="glyphicon glyphicon-search"></span> Search</button>
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
                    
                    <button v-if="user.name" class="btn btn-warning wide" @click="addToCookBook(result)">Add to Cookbook</button>
                    <button v-if="!user.name" class="btn btn-warning wide" @click="please()">Add to Cookbook</button>
                    <a :href="result.recipe.url" target="_blank" class="btn btn-primary wide">View Recipe <span class="glyphicon glyphicon-new-window"></span></a>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    const swal = require('sweetalert2')
    export default {
        name: 'results',
        data() {
            return {
                recipe: "",
                activeRecipe: {}
            }
        },
        mounted() {},
        computed: {
            results() {
                return this.$store.state.results

            },
            cookBook() {
                return this.$store.state.cookBook
            },

            user() {
                return this.$store.state.user
            }
        },
        methods: {

            please() {
                swal({
                    title: "Please login first",
                    type: 'error',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: 'grey',
                    cancelButtonText: 'Continue Browsing',
                    confirmButtonText: 'Go to login'
                }).then((result) => {
                    if (result.value) {
                        swal({
                            position: 'top-right',
                            type: 'success',
                            title: 'Transferring to login page. . .',
                            timer: 700
                        })
                        this.$store.dispatch('authenticate')


                    }
                })
            },

            setActiveRecipe(result) {
                this.activeRecipe = result
            },

            getRecipes() {
                this.$store.dispatch('getRecipes', this.recipe)
            },
            addToCookBook(result) {


                for (var i = 0; i < this.cookBook.length; i++) {
                    var recipe = this.cookBook[i]
                    if (result.recipe.url == recipe.url)

                        return swal(
                        '',
                        'This recipe is already in your cookbook!',
                        'error'
                    )
                }
                var recipe = {
                    label: result.recipe.label,
                    imageUrl: result.recipe.image,
                    url: result.recipe.url,
                    servings: result.recipe.yield,
                    dietLabels: result.recipe.dietLabels,
                    healthLabels: result.recipe.healthLabels,
                    ingredients: result.recipe.ingredientLines,
                    calories: result.recipe.calories
                }
                this.$store.dispatch('addToCookBook', recipe)
                swal(
                    '',
                    'This recipe has been added to your cookbook!',
                    'success'
                )
            },

            addToShopList(i) {
                var item = {
                    description: i
                }
                this.$store.dispatch('addToShopList', item)
                return swal({
                    position: 'top-right',
                    type: 'success',
                    title: 'Added to shopping list',
                    showConfirmButton: false,
                    timer: 700
                })
            },



            moving(event) {
                console.log(event)
                event.dataTransfer.setData('text/javascript', JSON.stringify(this.item))
                console.log('We are moving')
            }
        },
        components: {}
    }
</script>

<style scoped>
    .container-fluid {
        text-align: center;
        width: 80%;
    }
    
    .words {
        font-size: 2rem
    }
    
    .glyphicon-new-window {
        margin-left: 10px
    }
    
    .hashtag {
        padding: 40px;
        text-align: center;
    }
    
    .modal-title {
        background-color: rgba(0, 0, 0, 0.603);
        color: white
    }
    
    .modal-body {
        text-align: left;
        background-color: rgba(75, 75, 75, 0.726);
        color: white
    }
    
    .row {
        width: 100%
    }
    
    .card {
        padding: 15px;
        margin: 25px;
        height: 400px;
        background-color: rgba(255, 255, 255, 0.700);
        box-shadow: 5px 5px rgb(138, 138, 138);
        border-radius: 6%
    }
    
    .card:hover {
        cursor: pointer;
        background-color: white;
        box-shadow: 5px 5px rgb(44, 44, 44);
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
        margin-top: 20px;
        justify-content: center;
    }
    
    .wide {
        width: 100%
    }
    
    .btn-warning {
        margin-top: 10px;
    }
    
    .btn-primary {
        margin-top: 10px;
    }
    /* this is for the button-primary margin correction */
    
    .hey {
        margin-top: 0px
    }
    /* ----------------------------------------- */
    
    .submit {
        height: 3rem;
        margin-top: 20px;
    }
    
    .glyphicon-plus:hover {
        color: rgb(2, 117, 10);
        background-color: rgba(255, 255, 255, 0.87)
    }
    
    .glyphicon-plus {
        cursor: pointer;
        outline: 1px solid green;
        background-color: green;
        padding: 3px
    }
    
    .static {
        position: fixed;
        right: 35px;
        z-index: 1;
    }
    
    .text-center {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
    /* .modal-content {
        background-image: url("https://cdn4.littlethings.com/app/uploads/2016/09/10649754_827245447309093_9136150693325644633_n-850x565.jpg");
        background-size: contain;
        background-repeat: no-repeat
    } */
</style>