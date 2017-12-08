<template>
  <div>
    <form @submit.prevent="getRecipes()">
      <input class="search" type="text" v-model="recipe" placeholder="Search..">
      <button type="submit">Search</button>
    </form>
    <div class="card" style="width: 20rem;" v-for='result in results'>
      <img class="card-img-top" :src="result.recipe.image" alt="Card image cap">
      <div class="card-block">
        <h4 class="card-title">{{result.recipe.label}}</h4>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a :href="result.recipe.url" class="btn btn-primary">View Recipe</a>
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
      results(){
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

.card-img-top{
  width: 150px;
  height: 150px
}
</style>