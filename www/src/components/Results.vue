<template>
  <div class="container-fluid">
    <div>
      <form @submit.prevent="getRecipes()">
        <input class="search" type="text" v-model="recipe" placeholder="Search millions of recipes...">
        <button type="submit" class="submit btn btn-default">Default</button>
       
        
      </form>
    </div>
    <div class="row text-center">
      <div class="card col-lg-8" style="width: 28rem;" v-for="result in results" draggable="true" v-on:dragstart.capture="moving">
        <img class="card-img-top" :src="result.recipe.image" alt="Card image cap">
        <div class="card-block">
          <h5 class="card-title">
            <strong>{{result.recipe.label}}</strong>
          </h5>
          <p class="card-text" v-if="result.recipe.source == 'No Recipes'">Yummy!!</p>
          <p class="card-text" v-else>{{result.recipe.source}}</p>
          <a :href="result.recipe.url" class="btn btn-primary to">View Recipe</a>
          <button class="btn btn-warning" @click="addToCookBook(result)">Add to Cookbook
          </button>
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
                recipe: ""
            }
        },
        mounted() {},
        computed: {
            results() {
                return this.$store.state.results

            }
        },
        methods: {
            getRecipes() {
                this.$store.dispatch('getRecipes', this.recipe)
            },
            addToCookBook(result) {
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
        width: 70%;
    }
    
    .row {
        display: inline;
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
        height: 200px
    }
    
    .search {
        width: 30vw;
        color: white;
        background-color: rgb(18, 4, 66);
        font-size: 2rem;
        height: 3rem
    }
    
    .submit {
        color: white;
        background-color: rgb(18, 4, 66);
        height: 3rem;
        margin-right: 35%
    }
    
    .glyphicon:hover {
        color: gold
    }
    
    .static {
        position: fixed;
        right: 35px;
        z-index: 1;
    }
</style>