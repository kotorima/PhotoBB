<template>
    <div class='blockmain'>
        <app-search class='search'></app-search>
        <app-tours-list class='two'></app-tours-list>
    </div>
</template>

<script>
import Search from './Search.vue';
import ToursList from './ToursList.vue';
import store from '../store';
import axios from "axios";
import {searchFunction} from './mixins/SearchFunction.js';

export default {
    mixins: [searchFunction],
    data() {
        return {
            
        }
    },
    components: {
        "app-search": Search,
        "app-tours-list": ToursList,
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
        value: {
            get: function() {
                return store.state.place;
            },
            set: function(value) {
                store.dispatch('SET_PLACE', value);
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
        noResult: {
            get: function() {
                return store.state.noResult;
            },
            set: function(value) {
                store.dispatch('SET_NO_RESULT', value);
            }
        },
    },
    mounted() {
        if(this.searchOn === true) {
            this.search();
        }
    },
}
</script>

<style scoped>
.blockmain {
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: auto;
}
.search {
    width: 100%;
    margin: 3rem 0;
}

.category {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

.category:not(first-child) {
    margin-left: 2rem;
}

.one {
    margin-bottom: 5rem;
}
.two {
    margin-bottom: 2rem;
}
</style>