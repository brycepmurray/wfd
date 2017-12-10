<template>
  <div class="container">
    <div id="app">
      <navbar></navbar>
      <router-view></router-view>
    </div>

    <footer>
      <h6>Coolio, Julio</h6>
      <span><button>Favorites</button><button>Hate list</button></span>
      
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
    background-image: url('http://www.myfreetextures.com/wp-content/uploads/2014/10/seamless-wood-texture-2.jpg')
  }

button{
  float: right
}

  footer {
    height: 10vh;
    width: 100%;
    position: fixed;
    bottom: 0px;
    left: 0px;
    background-color: #333;
    color: white
  }
</style>