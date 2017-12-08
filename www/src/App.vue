<template>
  <div>
    <div id="app">
      <navbar></navbar>
      <router-view></router-view>
    </div>

    <footer>
      <h6>tm@boisecodeworks</h6>
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

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
  }

  li {
    float: left;
  }

  li a,
  .dropbtn {
    display: inline-block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }

  li a:hover,
  .dropdown:hover .dropbtn {
    background-color: red;
  }

  li.dropdown {
    float: right;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  .dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
  }

  .dropdown-content a:hover {
    background-color: #f1f1f1
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }

  .search {
    margin-top: 12px;
    width: 30vw;
    margin-left: 20vw
  }

  footer {
    height: 10vh;
    width: 100%;
    background-color: #333;
    color: white
  }
</style>