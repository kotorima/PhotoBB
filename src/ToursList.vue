<template>
  <div>
    <app-tour-item v-for="tour in tours" v-bind:touritem="tour"></app-tour-item>
  </div>
</template>

<script>
import axios from 'axios';
import TourItem from './TourItem.vue';

export default {
  data() {
    return {
      tours: null
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
};
</script>