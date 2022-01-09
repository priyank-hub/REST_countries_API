<template>
  <div>

    <v-app>
      <!-- appbar -->
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

      <!-- list of all countries -->
      <Countries />
    </v-app>
    

  </div>
</template>

<script>
import Countries from './Countries'
export default {
  name: 'Main',
  props: {
    
  },
  components: {
    Countries,
  },
  methods: {
    darkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.font-outfit {
  font-family: Outfit, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
