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
        let cityName = '&location_name=';
        let cityId = '&google_place_id=';
        let startDate = 'start_date=';
        let finishDate = '&finish_date=';
        let price = '&cost=';
        if(this.value.value === undefined || this.value.value === '' ) {
          this.value.value = '';
          this.value.label = '';
          cityName = '';
          cityId = '';
        }
        if (this.date[0] === undefined || this.date[0] === '') {
          this.date[0] = '';
          this.date[1] = '';
          startDate = '';
          finishDate = '';
        }
        if (this.cost === undefined || this.cost === 0) {
          this.cost = '';
          price = '';
        }
        console.log(this.cost)
        axios
          .get('https://cors-anywhere.herokuapp.com/http://photobb.dev.webant.ru/api/v1/tours.json?'+startDate+this.date[0]+finishDate+this.date[1]+cityName+this.value.label+cityId+this.value.value+price+this.cost+'&all=true')
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