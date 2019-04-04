<template>
  <div>
    <app-tour-item v-for="tour in tourslist" v-bind:touritem="tour"></app-tour-item>
  </div>
</template>

<script>
import TourItem from './TourItem.vue';

export default {
  data() {
    return {
      info: null
    };
  },
  components: {
    "app-tour-item": TourItem
  },
  mounted() {
    axios
      .get('https://cors-anywhere.herokuapp.com/http://photobb.dev.webant.ru/api/v1/tours.json')
      .then(response => (this.info = response))
      .then(response => (console.log(response)));
  },
  props: ['tourlist']
};
</script>