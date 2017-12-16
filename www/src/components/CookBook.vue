<template>
    <div class="container-fluid">



        <!-- Modal -->
        <div id="myModal" class="modal fade" role="dialog">
            <div class="modal-dialog">

                <!-- Modal content-->
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title">
                            <strong>{{activeRecipe.label}}</strong>
                        </h4>


                        <div class="row text-right">
                            <div class="col-xs-6">
                                <img class="card-img-top" :src="activeRecipe.imageUrl" alt="Card image cap">
                            </div>
                            <div class="col-xs-6">
                                <h5 v-for="i in activeRecipe.healthLabels">#{{i}}</h5>
                            </div>
                        </div>
                        <div class="modal-body text-left">
                            <h3>Ingredients:</h3>
                            <h6> (click
                                <span class="glyphicon glyphicon-plus"></span> to add to shopping list)</h6>
                            <ul>
                                <h5 class="modal-title" v-for="t in activeRecipe.ingredients">
                                    <li>{{t}}
                                        <span @click='addToShopList(t)' class="glyphicon glyphicon-plus"></span>
                                    </li>
                                </h5>
                            </ul>
                        </div>
                        <div class="modal-footer">
                            <h5>Servings: {{activeRecipe.servings}}</h5>
                            <h5>Calories: {{Math.floor(activeRecipe.calories)}}</h5>
                            <h5 v-for="i in activeRecipe.dietLabels">{{i}}</h5>
                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                            <a :href="activeRecipe.url" target="_blank" class="btn btn-primary">View Directions
                                <span class="glyphicon glyphicon-hand-right"></span>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <!-- end of Modal -->
        <div class="row text-center ">
            <div @click="setActiveRecipe(recipe)" class="card col-lg-8" style="width: 28rem;" v-for="recipe in cookBook" draggable="true"
                v-on:dragstart.capture="moving">
                <div class="ft">
                    <span class="glyphicon glyphicon-trash" @click="removeFromCookBook(recipe)"></span>
                </div>
                <img class="card-img-top" :src="recipe.imageUrl" alt="Card image cap" data-toggle="modal" data-target="#myModal">
                <div class="card-block">
                    <h5 data-toggle="modal" data-target="#myModal" class="card-title">
                        <strong>{{recipe.label}}</strong>
                    </h5>
                    <p class="card-text" v-if="recipe.source == 'No Recipes'">Yummy!!</p>
                    <p class="card-text" v-else>{{recipe.source}}</p>
                    <a :href="recipe.url" target="_blank" class="btn btn-primary to">View Recipe</a>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    const swal = require('sweetalert2')
    export default {
        name: 'cookBook',
        data() {
            return {
                activeRecipe: {}
            }
        },
        mounted() {
            this.$store.dispatch('getCookBook', this.$route.params.id)

        },
        computed: {
            cookBook() {
                return this.$store.state.cookBook
            }


        },
        methods: {
            removeFromCookBook(recipe) {
                this.$store.dispatch("removeFromCookBook", recipe)
                return swal({
                    position: 'top-right',
                    type: 'error',
                    title: 'Recipe removed',
                    showConfirmButton: false,
                    timer: 1000
                })
            },
            setActiveRecipe(recipe) {
                this.activeRecipe = recipe
            },
            addToShopList(t) {
                var item = {
                    description: t
                }
                this.$store.dispatch('addToShopList', item)
                return swal({
                    position: 'top-right',
                    type: 'success',
                    title: 'Added to shopping list',
                    showConfirmButton: false,
                    timer: 570
                })
            },
        },
        components: {}
    }
</script>
<style scoped>
    .container-fluid {
        text-align: center;
        width: 70%;
    }

    .ft {
        text-align: right;
    }

    .glyphicon-trash:hover {
        transform: scale(2, 2)
    }

    .glyphicon-trash:hover {
        color: rgb(150, 1, 1)
    }

    .glyphicon-plus:hover {
        color: rgb(2, 117, 10)
    }

    .glyphicon-plus {
        cursor: pointer
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
        background-color: rgb(255, 255, 255);
        box-shadow: 5px 5px #333;
        ;
    }


    .card-img-top {
        width: 200px;
        height: 200px
    }

    .text-center {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
</style>