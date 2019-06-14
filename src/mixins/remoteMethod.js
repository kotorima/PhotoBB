import axios from 'axios';

export const remoteMethod = { 
    data: function () {
        return {
            cities: [],
            list: [],
            loading: false,
        }
      },
    methods: {
        remoteMethod(query) {
            if (query !== '') {
              this.loading = true;
                axios
                .get('https://cors-anywhere.herokuapp.com/http://photobb.dev.webant.ru/api/v1/cities?city='+query)
                .then(response => {
                    this.cities = response.data.location_autocompletes;
                    this.list = this.cities.map(value => {
                        return { value: value.location_name, label: value.google_place_id }
                    });
                    this.loading = false;
                    return this.list;
                });
            } else {
              this.list = [];
            }
          },
    },
}