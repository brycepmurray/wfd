<template>
    <div class="container-fluid">
        <div class="row text-center">
            <div class="card col-lg-8" style="width: 28rem;" v-for="recipe in cookBook" draggable="true" v-on:dragstart.capture="moving">
            <div class="ft">
                <span class="glyphicon glyphicon-trash" @click="removeFromCookBook(recipe)"></span>
            </div>
                <img class="card-img-top" :src="recipe.imageUrl" alt="Card image cap">
                <div class="card-block">
                    <h5 class="card-title">
                        <strong>{{recipe.label}}</strong>
                    </h5>
                    <p class="card-text" v-if="recipe.source == 'No Recipes'">Yummy!!</p>
                    <p class="card-text" v-else>{{recipe.source}}</p>
                    <a :href="recipe.url" class="btn btn-primary to">View Recipe</a>
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
            return {}
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
            }
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