<template>
  <div class="">
    <div id="countries" class="container mt-5">

        <!-- filters -->
        <div class="row justify-content-between align-items-center">
          <div class="col-12 col-md-5">
            <v-form>
              <v-text-field
                placeholder="Search for a country..."
                solo
                v-model="search"
                style="font-size: 14px"
              ></v-text-field>
            </v-form>
          </div>

          <div class="col-6 col-md-3">
            <div class="text-center">
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
        <div v-if="fetching">
          <div class="row justify-content-center">
            <div class="col-12 col-md-3 col-lg-4" v-for="i in sample" :key="i+501">
              <div class="m-2">
                <v-skeleton-loader
                  class=""
                  max-width="344"
                  type="card"
                ></v-skeleton-loader>
              </div>
            </div>
          </div>
        </div>

        <div v-else class="row">
          <div class="col-12 col-md-3 col-lg-4" v-for="(country, index) in filteredCountries" :key="index">
            <div class="m-2">
              <router-link :to="{ name: 'country', params: { countryName: country.cca2, country: country}}"
              class="" style="text-decoration: none"> 
                <v-card
                  class=""
                  max-width="344"             
                >
                  <v-img
                    :src="country.flags.svg"
                    height="200px"
                  ></v-img>

                  <v-card-title style="font-weight: 700; font-size: 16px">
                    <span v-if="country.name.common.length > 17">
                      {{ country.name.common.substring(0,15) }}...
                    </span>
                    <span v-else>
                      {{ country.name.common }}
                    </span>
                  </v-card-title>

                  <v-card-text class="text-left">
                    <div>
                      <b>Population: </b>
                      <span>
                        {{ country.population.toLocaleString() }}
                      </span>
                    </div>
                    <div>
                      <b>Region: </b>
                      <span>
                        {{ country.region }}
                      </span>
                    </div>
                    <div>
                      <b>Capital: </b>
                      <span v-for="capital in country.capital" :key="capital">
                        {{ capital }}
                      </span>
                    </div>
                  </v-card-text>
                </v-card>          
              </router-link>
            </div>
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
        sample: [],
        fetching: false,
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
    for(let i=0; i<100; i++){
      this.sample.push(i);
    }
    this.fetching = true;
    await axios.get('https://restcountries.com/v3.1/all')
    .then(res => {
      console.log('response', res)
      if (res.status == 200) {
        this.countries = res.data
        this.fetching = false;
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
    },

    go(country) {
      console.log('going to', country.name.common);
      this.$router.push(country.name.common)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#countries{
  font-family: Outfit, Helvetica, Arial, sans-serif !important;
}
</style>
