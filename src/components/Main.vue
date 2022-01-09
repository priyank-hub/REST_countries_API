<template>
  <div>

    <v-app>
      <!-- appbar -->
      <nav class="bg-white p-3 border-bottom font-outfit" style="box-shadow: 0px 5px 20px -20px #000000">
        <div class="container">
          <div class="row justify-content-between">
            <div>
              <span class="" style="font-size: 20px; font-weight: 700; color: black">
                Where in the world?
              </span>
            </div>

            <div style="color: black">
              <i class="far fa-moon"></i>
              <span>
                Dark Mode
              </span>
            </div>
          </div>
        </div>      
      </nav>

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
