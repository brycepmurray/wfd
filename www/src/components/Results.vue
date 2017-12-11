<template>
  <div class="container-fluid">
    <div>
      <form @submit.prevent="getRecipes()">
        <input class="search" type="text" v-model="recipe" placeholder="Search millions of recipes...">
        <button class="submit" type="submit">Search</button>
      </form>
    </div>
    <div class="row text-center">
      <div class="col-lg-5 static">
        <calendar>
        </calendar>
      </div>
      <div class="card col-lg-5" style="width: 20rem;" v-for='result in results'>
        <img class="card-img-top" :src="result.recipe.image" alt="Card image cap">
        <div class="card-block">
          <span class="glyphicon glyphicon-star">Favorite

          </span>
          <h5 class="card-title">
            <strong>{{result.recipe.label}}</strong>
          </h5>
          <p class="card-text" v-if="result.recipe.source == 'No Recipes'">Yummy!!</p>
          <p class="card-text" v-else>{{result.recipe.source}}</p>
          <a :href="result.recipe.url" class="btn btn-primary to">View Recipe</a>
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
    mounted() {
    },
    computed: {
      results() {
        return this.$store.state.results
      }
    },
    methods: {
      getRecipes() {
        this.$store.dispatch('getRecipes', this.recipe)
      }
    },
    components: {
      Calendar
    }
  }
</script>

<style scoped>
  .container {
    background-color: rgb(73, 72, 72);
    text-align: center;
    width: 80%;
  }

  .row {
    display: inline;

  }

  .card {
    outline: 1px solid black;
    padding: 20px;
    margin: 10px;
    height: 400px;
    background-color: whitesmoke;
  }

  .card:hover {
    outline: 5px solid rgb(211, 218, 214);
    cursor: pointer;
    background-color: white
  }

  .search {
    float: center;
    width: 30vw;
    color: white;
    background-color: rgb(18, 4, 66);
    font-size: 2rem;
    height: 3rem
  }

  .submit {
    color: white;
    background-color: rgb(18, 4, 66);
    height: 3rem
  }


  .card-img-top {
    width: 150px;
    height: 150px
  }

  .glyphicon:hover {
    color: gold
  }
  .static{
    position:fixed;
    right: 0px;
    z-index: 1;
    

  }
</style>