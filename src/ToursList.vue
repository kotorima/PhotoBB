<template>
  <div class='main'>
    <div v-loading="loading">
      <div v-if='noResult' class='noResult'>
        <h3>По вашему запросу туров не найдено</h3>
      </div>
      <app-tour-item v-else v-for="tour in tours" :key="tour.id" :touritem="tour" class='tours'></app-tour-item>
    </div>
    <div v-if='load' v-loading='load' class='empty'></div>
    <a v-if='load && noResult===false || this.startCount < this.countOfTours - this.number' v-on:click="loadingNextTours()">Смотреть ещё</a>
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
      loading: store.state.loading,
      load: false,
      toursInPage: 0,
      startCount: 0,
      number: 5,
    };
  },
  components: {
    "app-tour-item": TourItem
  },
  watch: {
    loading: function () {
      store.dispatch('SET_LOADING', this.loading);
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
    searchPath: {
      get: function() {
          return store.state.searchPath;
      },
      set: function(value) {
          store.dispatch('SET_SEARCH_PATH', value);
      }
    },
    searchOn: {
      get: function() {
          return store.state.searchOn;
      },
      set: function(value) {
          store.dispatch('SET_SEARCH_ON', value);
      }
    },
    placeId: {
      get: function() {
          return store.state.placeId;
      },
      set: function(value) {
          store.dispatch('SET_PLACE_ID', value);
      }
    },
    noResult: {
      get: function() {
          return store.state.noResult;
      },
      set: function(value) {
          store.dispatch('SET_NO_RESULT', value);
      }
    },
    countOfTours: {
      get: function() {
          return store.state.countOfTours;
      },
      set: function(value) {
        store.dispatch('SET_COUNT_OF_TOURS', value);
      }
    },
  },
  mounted() {
      if(this.searchOn === false) {
        axios
        .get('https://cors-anywhere.herokuapp.com/http://photobb.dev.webant.ru/api/v1/tours.json?limit='+this.countOfToursAddToPage)
        .then(response => { 
          this.tours = response.data.items;
          this.countOfTours = response.data.count;
          this.loading = false;
        });
      }
  },
  methods: {
    loadingNextTours: function() {
      this.toursInPage = $('.main > div > .tours');
      if(this.startCount <= this.countOfTours - this.number) {
        this.load = true;
        this.startCount += this.number;
        axios
        .get('https://cors-anywhere.herokuapp.com/http://photobb.dev.webant.ru/api/v1/tours.json?limit='+this.countOfToursAddToPage+'&start='+this.startCount)
        .then(response => { 
          this.tours = this.tours.concat(response.data.items);
          this.load = false;
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
    width: 80vw;
    min-height: 30vh;
  }

  h2 {
    margin-left: 5vw;
    margin-bottom: 2rem
  }

  .empty{
    width: 100%;
    height: 3rem;
  }

  .noResult {
    padding-top: 3rem;
  }

  .noResult > h3 {
    font-family: 'Roboto';
    color: #7E7E7E;
  }
</style>