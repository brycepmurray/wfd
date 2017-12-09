<template>
  <div>
    <div>
      <form @submit.prevent="getRecipes()">
        <input class="search" type="text" v-model="recipe" placeholder="Search millions of recipes...">
        <button class="submit" type="submit">Search</button>
      </form>
    </div>
    <div class="row">
      <div class="card col-xs-12 col-md-6 col-lg-6" style="width: 20rem;" v-for='result in results'>
        <img class="card-img-top" :src="result.recipe.image" alt="Card image cap">
        <div class="card-block">
          <h4 class="card-title">{{result.recipe.label}}</h4>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a :href="result.recipe.url" class="btn btn-primary to">View Recipe</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
    }
  }
</script>

<style scoped>

  .card{
    outline: 1px solid black;
    padding: 20px;
    margin: 10px;
    height: 400px
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
</style>