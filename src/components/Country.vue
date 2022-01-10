<template>
  <div class="font-outfit">
    <!-- Country {{ country.name }}  -->

    <div v-if="fetching">

    </div>
    <div v-else>
        <div class="container" style="margin-top: 70px">
            <div class="row">
                <div class="col-3 text-left"> 
                    <v-btn
                    depressed
                    elevation="3"
                    class=""
                    @click="$router.go(-1)"
                    >
                        <i class="fas fa-arrow-left mx-2"></i>
                        Back
                    </v-btn>
                </div>
            </div>

            <div class="row align-items-center justify-content-between" style="margin-top: 70px; margin-bottom: 70px">
                <div class="col-12 col-md-6">
                    <img :src="currentCountry.flags.svg" class="w-100" style="min-height: 300px" alt="">
                </div>
                <div class="col-12 col-md-5 text-left">
                    <div>
                        <span style="font-size: 28px; font-weight: 700" :class="this.$vuetify.theme.dark ? 'text-white' : '' ">
                            {{ currentCountry.name.common }}
                        </span>
                    </div>
                    <div>
                        <div class="row mt-4" :class="this.$vuetify.theme.dark ? 'text-white' : '' " style="font-size: 13px">
                            <div class="col-12 col-md-6">
                                <div class="my-2">
                                    <b>Native Name: </b>
                                    <span>
                                        {{ nativeName }}
                                    </span>
                                </div>
                                <div class="my-2">
                                    <b>Population: </b>
                                    <span>
                                        {{ currentCountry.population.toLocaleString() }}
                                    </span>
                                </div>
                                <div class="my-2">
                                    <b>Region: </b>
                                    <span>
                                        {{ currentCountry.region }}
                                    </span>
                                </div>
                                <div class="my-2">
                                    <b>Sub Region: </b>
                                    <span>
                                        {{ currentCountry.subregion }}
                                    </span>
                                </div>
                                <div class="my-2">
                                    <b>Capital: </b>
                                    <span v-for="capital in currentCountry.capital" :key="capital">
                                        {{ capital }}
                                    </span>
                                </div>
                            </div>
                            <div class="col-12 col-md-6">
                                <div class="my-2">
                                    <b>Top Level Domain: </b>
                                    <span>
                                        {{ currentCountry.tld[0] }}
                                    </span>
                                </div>
                                <div class="my-2">
                                    <b>Currencies: </b>
                                    <span>
                                        {{ currency }}
                                    </span>
                                </div>
                                <div class="my-2">
                                    <b>Languages: </b>
                                    <span v-for="(lang, index) in languages" :key="index">
                                        <span v-if="index <= languages.length - 2">
                                            <span v-if="parseInt(index) == parseInt(languages.length) - 2">
                                                {{ lang }}
                                            </span>
                                            <span v-else>
                                                {{ lang }}, 
                                            </span>
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div class="row mt-4" :class="this.$vuetify.theme.dark ? 'text-white' : '' " style="font-size: 13px">
                            <div class="col-12">
                                <div class="row align-items-start">
                                    <div class="col-12 col-md-4">
                                        <b>Border Countries: </b>
                                    </div>
                                    <div class="col-12 col-md-8">
                                        <div class="row align-items-center">
                                            <div v-for="border in borders" :key="border" class="m-1">
                                                <!-- <span style="font-size: 12px">
                                                    {{ border }}
                                                </span> -->
                                                <v-btn                                                
                                                elevation="3"
                                                class=""
                                                style="font-size: 10px;"
                                                >
                                                    {{ border }}
                                                </v-btn>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- <br><br>
        {{ currentCountry }} -->
    </div>

  </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Country',
    props: {
        country: Object,
        countryName: String,
    },
    components: {
    },
    data() {
        return {
            currentCountry: {},
            nativeName: null,
            currency: null,
            languages: [],
            borders: [],
            fetching: true,
        }
    },
    async mounted() {
        this.fetching = true;
        // console.log('id', this.id);
        await axios.get('https://restcountries.com/v3.1/alpha/' + this.countryName)
        .then(response => {
            console.log('response', response)
            if (response.status == 200) {
                this.currentCountry = response.data[0]

                let text = '', currency = '', languages = '';
                for (let i in response.data[0].name.nativeName) {
                    for (let j in response.data[0].name.nativeName[i]) {
                        text += response.data[0].name.nativeName[i][j] + ", ";
                    }
                }

                for (let m in response.data[0].currencies) {
                    for (let n in response.data[0].currencies[m]) {
                        currency += response.data[0].currencies[m][n] + ", ";
                    }
                }

                for (let m in response.data[0].languages) {
                    languages += response.data[0].languages[m] + ", ";
                }

                // console.log('text', languages)
                this.nativeName = text.split(',')[0]
                this.currency = currency.split(',')[0]
                this.languages = languages.split(',');
                this.fetching = false;
            }
            else {
                console.log('opps!');
            }
        });

        this.currentCountry.borders.forEach(border => {
            axios.get('https://restcountries.com/v3.1/alpha/' + border)
            .then(res => {
                if (res.status == 200) {
                    this.borders.push(res.data[0].name.common);
                }
                else {
                    console.log('opps!');
                }
            });
        });
    },
    methods: {

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
