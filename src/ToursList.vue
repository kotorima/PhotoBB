<template>
  <div class='main'>
    <h2>Ближайшие поездки фотографов</h2>
    <div v-loading="loading">
      <app-tour-item v-for="tour in tours" v-bind:key="tour.id" v-bind:touritem="tour" class='tours'></app-tour-item>
    </div>
    <a v-if='this.startCount <= this.countOfTours - this.number' v-on:click="loadingNextTours()">Смотреть ещё</a>
  </div>
</template>

<script>
import axios from 'axios';
import TourItem from './TourItem.vue';
import store from '../store';

export default {
  data() {
    return {
      countOfToursAddToPage: 5,
      countOfTours: 0,
      loading: true,
      toursInPage: 0,
      startCount: 0,
      number: 5,
    };
  },
  components: {
    "app-tour-item": TourItem
  },
  watch: {
    countOfToursAddToPage: function () {
      
    },
  },
  computed: {
    tours: {
      get: function() {
          return store.state.tours;
      },
      set: function(value) {
          store.dispatch('SET_TOURS', value);
      }
    },
  },
  mounted() {
    axios
      .get('https://cors-anywhere.herokuapp.com/http://photobb.dev.webant.ru/api/v1/tours.json?limit='+this.countOfToursAddToPage)
      .then(response => { 
        this.tours = response.data.items;
        this.countOfTours = response.data.count;
        this.loading = false;
      });
  },
  methods: {
    loadingNextTours: function() {
        this.toursInPage = $('.main > div > .tours');
        if(this.startCount <= this.countOfTours - this.number) {
          this.startCount += this.number;
          axios
          .get('https://cors-anywhere.herokuapp.com/http://photobb.dev.webant.ru/api/v1/tours.json?limit='+this.countOfToursAddToPage+'&start='+this.startCount)
          .then(response => { 
            this.tours = this.tours.concat(response.data.items);
            console.log(this.tours);
            this.loading = false;
          });
        }
    },
  },
};
</script>

<style scoped>
  a {
    display: flex;
    justify-content: center;
    align-self: center;
    font-family: 'Roboto';
    font-weight: normal;
    text-decoration: underline;
    margin-bottom: 5rem;
    color: #CE521D;
  }
  a:hover{
    color: #EC7948;
  }
  .main {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    box-sizing: border-box;
    padding: 0;
  }
  .main > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    min-height: 30vh;
  }

  h2 {
    margin-left: 15vw;
    margin-bottom: 2rem
  }
</style>