<template>
  <div class='main'>
    <h3>Ближайшие поездки фотографов</h3>
    <div>
      <app-tour-item v-for="tour in tours.slice(0, count)" v-bind:key="tour.id" v-bind:touritem="tour"></app-tour-item>
      <a v-if="count<tours.length" v-on:click="loadingNextTours(tours.length)">Смотреть ещё</a>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import TourItem from './TourItem.vue';

export default {
  data() {
    return {
      tours: [],
      count: 5,
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
  }

  h3 {
    margin-left: 15vw;
  }
</style>