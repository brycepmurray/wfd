<template>
    <div class="container-fluid">

        

        <!-- Modal -->
        <div id="myModal" class="modal fade" role="dialog">
            <div class="modal-dialog">

                <!-- Modal content-->
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title">Modal Header</h4>
                    </div>
                    <div class="modal-body">
                        <p>Some text in the modal.</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                </div>

            </div>
        </div>
        <!-- end of Modal -->
        <div class="row text-center">
            <div class="card col-lg-8" style="width: 28rem;" v-for="recipe in cookBook" draggable="true" v-on:dragstart.capture="moving">
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
            },
            setActiveRecipe(recipe) {
                this.activeRecipe = recipe
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

    .glyphicon:hover {
        transform: scale(2, 2)
    }

    .glyphicon:hover {
        color: rgb(150, 1, 1)
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
</style>