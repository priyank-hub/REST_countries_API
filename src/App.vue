<template>
  <div id="app" class="">
    <v-app>
      <v-app-bar
        elevation="4"
        class="font-outfit"
        style="max-height: 60px; position: sticky; top: -1px; z-index: 100"
      >
        <div class="container">
          <div class="row justify-content-between align-items-center">
            <div>
              <span class="" style="font-size: 20px; font-weight: 700;">
                Where in the world?
              </span>
            </div>

            <div style="cursor: pointer" @click="darkMode">
              <span v-if="this.$vuetify.theme.dark">
                <i class="fas fa-lightbulb mx-2"></i>
                <span>
                  Light Mode
                </span>
              </span>
              <span v-else>
                <i class="far fa-moon mx-2"></i>
                <span>
                  Dark Mode
                </span>
              </span>
              
            </div>
          </div>
        </div>
      </v-app-bar>
      
      <router-view/>   
      
      <!-- <Main msg="Welcome to Your Vue.js App"/> -->
    </v-app>
  </div>
</template>

<script>
// import Main from './components/Main.vue'

export default {
  name: 'App',
  components: {
    // Main
  },
  methods: {
    darkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    }
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
