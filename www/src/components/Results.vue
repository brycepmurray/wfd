<template>
  <div>
    <form @submit.prevent= "getRecipes()" >
    <input class="search" type="text" v-model="recipe" placeholder="Search..">
    <button type="submit">Search</button>
  </form>
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
    },
    methods: {
      getRecipes(){
        debugger
        this.$store.dispatch('getRecipes', this.recipe)
      }
    }
  }
</script>

<style scoped>
</style>