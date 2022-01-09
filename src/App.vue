<template>
  <div id="app" class="bg-light">   
    <Main msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Main from './components/Main.vue'

export default {
  name: 'App',
  components: {
    Main
  }
}
</script>

<style>
#app {
  
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
}
</style>
