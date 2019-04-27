<template>
    <div class="main">
        <div class="item">
            <p>Где</p>
            <el-dropdown>
                <input placeholder="Введите место" v-model="value"></input>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item v-for='city in cities' v-bind:key="city.id"></el-dropdown-item>
                </el-dropdown-menu>
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
            <input placeholder="Определите стоимость" v-model="cost"></input>
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
import Vuex from 'vuex';

export default {
  data() {
    return {
        value: '',
        cost: '',
        cities: [],
        store: new Vuex.Store({
            state: {
                cost: {}
            },
        }),
    };
  },
  components: {
    "app-date-picker": DatePicker,
    "app-slider": Slider
  },
  
  watch: {
      value: function() {
          axios
            .get('https://cors-anywhere.herokuapp.com/http://photobb.dev.webant.ru/api/v1/cities.json='+this.value)
            .then(response => { 
                this.cities = response;
         });
      }
  },
  methods: {
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