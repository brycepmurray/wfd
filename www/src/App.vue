<template>
  <div>
    <div id="app">
      <navbar></navbar>
      <router-view></router-view>
    </div>

    <footer>
      <h6>Coolio, Julio</h6>
    </footer>
  </div>
</template>

<script>
  import Error from './components/Error'
  import Navbar from './components/Navbar'

  export default {
    name: 'app',
    components: {
      Error,
      Navbar
    },
    methods: {},

   
    mounted() {
     this.$store.dispatch('authenticate')
    }
  }

</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }


  footer {
    height: 10vh;
    width: 100%;
    background-color: #333;
    color: white
  }
</style>