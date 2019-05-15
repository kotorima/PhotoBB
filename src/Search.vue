<template>
    <div class="main">
        <div class="item">
            <p>Где</p>
            <el-dropdown>
                <el-select
                    v-model="value"
                    multiple
                    filterable
                    remote
                    reserve-keyword
                    placeholder="Место поездки"
                    :remote-method="remoteMethod"
                    :loading="loading">
                    <el-option
                    v-for='city in cities' 
                    v-bind:key="city.id"
                    :label="city.label"
                    :value="city.location_name.value">
                    </el-option>
                </el-select>
            </el-dropdown>
        </div>
        <div class="item">
            <p>Выберите даты</p>
            <el-dropdown>
                <app-date-picker ></app-date-picker>
            </el-dropdown>
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
        <button class="item button" v-on:click='search'>Найти</button>
    </div>
</template>

<script>
import DatePicker from './DatePicker.vue';
import Slider from './Slider.vue';
import axios from 'axios';
import store from '../store'

export default {
  data() {
    return {
        valueCost: 0,
        cities: [],
        options: [],
        value: [],
        list: [],
        loading: false,
    };
  },
  components: {
    "app-date-picker": DatePicker,
    "app-slider": Slider
  },

  mounted() {
      this.list = this.cities.map(city => {
        return { value: city, label: city };
      });
  },
  
  watch: {
      value: function() {
          axios
            .get('https://cors-anywhere.herokuapp.com/http://photobb.dev.webant.ru/api/v1/cities?city='+this.value)
            .then(response => { 
                this.cities = response.data.location_autocompletes;
                
         });
      },
  },
  computed: {
      cost: {
        get: function() {
            return store.state.cost
        },
        set: function(value) {
            store.dispatch('SET_COUNT', value)
        }
      }
  },
  methods: {
    remoteMethod(query) {
        if (query !== '') {
          this.loading = true;
          setTimeout(() => {
            this.loading = false;
            this.options = this.list.filter(item => {
              return city.label.toLowerCase()
                .indexOf(query.toLowerCase()) > -1;
            });
          }, 200);
        } else {
          this.options = [];
        }
      },
    handleCommand: function (command) {
        console.log(command);
    },
    search: function () {

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

button {
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

button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: #CE521D;
    border-radius:  0px 5px 5px 0px;
    font-size: 1rem;
}

.slider {
    width: 20%;
}
</style>