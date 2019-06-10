<template>
    <div class="main">
        <div class="item">
            <p>Где</p>
            <el-select
            v-model="value"
            filterable
            remote
            reserve-keyword
            placeholder="Место поездки"
            :remote-method="remoteMethod"
            :loading="loading"
            class = 'input-select'>
                <el-option
                v-for="city in list" 
                :key="city.id"
                :label="city.label"
                :value="city">
                </el-option>
            </el-select>
        </div>
        <div class="item">
            <p>Выберите даты</p>
            <app-date-picker></app-date-picker>
        </div>
        <div class="item">
            <p>Стоимость</p>
            <el-dropdown>
            <input placeholder="Определите стоимость" v-if="cost==0" readonly></input>
            <input v-else v-model="cost" readonly></input>
            <el-dropdown-menu slot="dropdown" class='slider'>
                    <el-dropdown-item>
                        <app-slider></app-slider>
                    </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
        <button v-if="searchPath=='/search'" class="item button" v-on:click="search">Найти</button>
        <router-link v-else :to="{ name: 'search'}" class='a'>
            <button class="item button" v-on:click="changeSearch" >Найти</button>
        </router-link>
    </div>
</template>

<script>
import DatePicker from "./DatePicker.vue";
import Slider from "./Slider.vue";
import axios from "axios";
import store from "../store";
import {mixin} from './mixins/AjaxFunctions.js';

export default {
    mixins: [mixin],
  data() {
    return {
        valueCost: 0,
        cities: [],
        options: [],
        value: store.state.placeId,
        list: [],
        loading: false,
        tours: store.state.tours,
        searchPath: store.state.searchPath,
        noResult: store.state.noResult,
        countOfTours: store.state.countOfTours,
    };
  },
  components: {
    "app-date-picker": DatePicker,
    "app-slider": Slider
  },
  watch: {
    value: function () {
      store.dispatch('SET_PLACE_ID', this.value);
    },
    tours: function () {
      store.dispatch('SET_TOURS', this.tours);
    },
    searchPath: function () {
      store.dispatch('SET_SEARCH_PATH', this.searchPath);
    },
    noResult: function () {
      store.dispatch('SET_NO_RESULT', this.noResult);
    },
    countOfTours: function () {
        store.dispatch('SET_COUNT_OF_TOURS', this.countOfTours);
    }
  },
  mounted() {
      this.searchOn = false;
      this.searchPath = this.$route.path;
      console.log(this.searchPath);
      this.list = this.cities.map(city => {
        return { value: city, label: city, };
      });
  },
  computed: {
      cost: {
        get: function() {
            return store.state.cost;
        },
        set: function(value) {
            store.dispatch('SET_COST', value);
        }
      },
      date: {
        get: function() {
            return store.state.date;
        },
        set: function(value) {
          store.dispatch('SET_DATE', value);
        }
      },
  },
  methods: {
    remoteMethod(query) {
        if (query !== '') {
          this.loading = true;
          axios
          .get('https://cors-anywhere.herokuapp.com/http://photobb.dev.webant.ru/api/v1/cities?city='+query)
          .then(response => { 
              this.cities = response.data.location_autocompletes;
              this.list = this.cities.map(value => {
                  return { value: value.google_place_id, label: value.location_name, }
              })
              this.loading = false;
              return this.list;
          });
        } else {
          this.list = [];
        }
    },
    changeSearch: function () {
        store.dispatch('SET_SEARCH_ON', true);
        console.log('main ' +this.searchOn);
    }
  }, 
}
</script>

<style scoped>
.main {
    display: flex;
    flex-direction: row;
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    width: 100%;
    padding: 0;
    background: #ffffff;
}

button,
.button {
    background: #CE521D;
    color: white;
    border: none;
}

p {
    font-size: 0.8rem;
    color: #8A8A8A;
}

span {
    font-family: 'Roboto'
}

input {
    border: none;
    width: 95%;
}

input:focus {
    border: none;
}

.item {
    width: 25%;
    padding: 0.5rem;
}

.item:not(:last-child) {
    border-right: 0.1rem solid rgba(226, 226, 226, 0.7);
}

button,
.button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: #CE521D;
    border-radius:  0px 5px 5px 0px;
    font-size: 1rem;
    font-weight: normal;
}

.slider {
    width: 20%;
}

.a {
    width: 25%;
}

.a > button {
    width: 100%;
    height: 3.5rem;
}

@media (max-width: 600px) {
    .main {
        flex-direction: column;
    }

    .item {
        width: 100%;
        box-sizing: border-box;
    }

    .item:not(:last-child) {
    border-right: none;
    border-bottom: 0.1rem solid rgba(226, 226, 226, 0.7);
    }

    button,
    .a,
    .a > button {
        border-radius:  0px 0px 5px 5px;
    }
}
</style>