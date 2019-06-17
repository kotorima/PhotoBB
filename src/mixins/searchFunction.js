import store from "../../store";
import axios from 'axios';
export const searchFunction = {
    data: function () {
      return {
        
      }
    },
    computed: {
      loadingTours: {
        get: function() {
            return store.state.loading;
        },
        set: function(value) {
          store.dispatch('SET_LOADING', value);
        }
      },
    },
    methods: {
      search: function () {
        this.loadingTours = true;
        this.noResult = false; 
        axios
        .get('https://cors-anywhere.herokuapp.com/http://photobb.dev.webant.ru/api/v1/tours.json?location_name='+this.value.label+'&google_place_id='+this.value.value+'&all=true')
        .then(response => { 
            this.tours = response.data.items;
            this.countOfTours = response.data.count;
            this.value = store.state.place;
            if (this.countOfTours === 0) {
                this.noResult = true;
            }
            this.loadingTours = false;
        });
      },
    },
}