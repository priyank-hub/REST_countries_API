<template>
  <div>
    <div class="container mt-5">

        <!-- filters -->
        <div class="row justify-content-between align-items-center">
          <div class="col-12 col-md-5">
            <v-form>
              <v-container>
                <v-row>
                  <v-col 
                  cols="12">
                    <v-text-field
                      label="Search for a country..."
                      solo
                      v-model="search"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </div>

          <div class="col-12 col-md-4">
            <div class="text-center">
              <!-- <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    color="white"
                    dark
                    v-bind="attrs"
                    v-on="on"
                    class="text-muted"
                    v-model="region"
                    style="padding: 25px 20px; font-size: 12px"
                  >
                    <div class="d-flex flex-row justify-content-between">
                      <div class="">
                        Filter By Region
                      </div>
                      <div>
                        <i class="fas fa-angle-down mx-2"></i>
                      </div>
                    </div>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item
                    v-for="(item, index) in items"
                    :key="index"
                  >
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu> -->

              <v-select
                :items="items"
                placeholder="Filter By Region"
                style="font-size: 14px"
                v-model="region"
                solo
                @change="regionChange()"
              ></v-select>
            </div>
          </div>
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
          region: '',
          items: [
            'Africa',
            'America',
            'Asia',
            'Europe',
            'Oceania',
          ],
      }
  },
  methods: {
    regionChange() {
      console.log('region', this.region);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
