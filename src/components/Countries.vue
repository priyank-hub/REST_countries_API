<template>
  <div>
    <div class="container mt-5">

        <!-- filters -->
        <div class="row">
            <b-form>
                <b-form-input v-model="search" class="border-0" type="text" placeholder="Search for a country..." style="box-shadow: 0px 0px 13px -15px #000000">

                </b-form-input>
            </b-form>
        </div>
        
        <!-- countries -->
        <div>
    
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Countries',
  props: {
    
  },
  data() {
      return {
          search: '',
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
