<template>
  <div>
    <input class="search" type="text" v-model="recipe" placeholder="Search..">
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
      search(){
        this.$store.dispatch('getrecipes', this.recipe)
      }
    }
  }
</script>

<style scoped>
</style>