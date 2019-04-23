<template>
  <div>
    <app-tour-item v-for="tour in tours.slice(0, count)" v-bind:key="tour.id" v-bind:touritem="tour"></app-tour-item>
    <a v-if="count<tours.length" v-on:click="loadingNextTours(tours.length)">Смотреть ещё</a>
  </div>
</template>

<script>
import axios from 'axios';
import TourItem from './TourItem.vue';

export default {
  data() {
    return {
      tours: null,
      count: 3,
    };
  },
  components: {
    "app-tour-item": TourItem
  },
  mounted() {
    axios
      .get('https://cors-anywhere.herokuapp.com/http://photobb.dev.webant.ru/api/v1/tours.json')
      .then(response => { 
        this.tours = response.data.items;
        });
  },
  methods: {
    loadingNextTours: function(countTours) {
        this.count+=3;
    }
  },
};
</script>

<style scoped>
  a {
    display: flex;
    justify-content: center;
    font-family: Roboto;
    font-weight: normal;
    text-decoration: underline;
    margin-bottom: 5rem;
    color: #CE521D;
  }
  a:hover{
    color: #EC7948;
  }
</style>