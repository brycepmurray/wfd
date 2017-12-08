<template>
  <div class="navbar">
      <ul>
          <li>
            <a href="#home">WFD</a>
          </li>
          
          <li class="dropdown">
            <a href="javascript:void(0)" class="dropbtn">Dropdown</a>
            <div class="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </li>
        </ul>

  </div>
</template>


<script>
  export default {
    name: 'navbar',
    data() {
      return {

      }
    },
    computed: {},
    methods: {},
    components: {}
  }
</script>


<style scoped>
</style>