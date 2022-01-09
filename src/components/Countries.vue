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
          <h3>All countries</h3>
          <div v-for="(country, index) in filteredCountries" :key="index">
            {{ country.name.common }} <br><br>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Countries',
  props: {
    
  },
  data() {
    return {
        countries: [],
        search: '',
        region: '',
        items: [
          'All',
          'Africa',
          'America',
          'Asia',
          'Europe',
          'Oceania',
        ],
    }
  },
  computed: {
    filteredCountries() {
      if (this.region && this.region != 'All') {
        let arr = this.countries.filter(country => {
          return country.name.common.toLowerCase().includes(this.search.toLowerCase()) 
                  && country.region.toLowerCase().includes(this.region.toLowerCase());
        });
        return arr;
      }
      else {
        let arr = this.countries.filter(country => {
          return country.name.common.toLowerCase().includes(this.search.toLowerCase());
        });
        return arr;
      }
    },
  },
  async mounted() {
    await axios.get('https://restcountries.com/v3.1/all')
    .then(res => {
      console.log('response', res)
      if (res.status == 200) {
        this.countries = res.data
      } 
      else {
        console.log('Opps error');
      }
    });
  },
  methods: {
    regionChange() {
      console.log('region', this.region);
      this.filteredCountries.filter(country => {
        return country.region.toLowerCase().includes(this.region.toLowerCase());
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
