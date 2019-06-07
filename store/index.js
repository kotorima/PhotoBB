import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
        cost: 0,
        date: [],
        placeId: '',
        tours: [],
        searchPath: '',
        searchOn: false,
        noResult: false,
        countOfTours: 0,
	},
	mutations: {
		SET_COST: (state, payload) => {
            state.cost = payload;
        },
        SET_DATE: (state, payload) => {
            state.date = payload;
        },
        SET_PLACE_ID: (state, payload) => {
            state.placeId = payload;
        },
        SET_TOURS: (state, payload) => {
            state.tours = payload;
        },
        SET_SEARCH_PATH: (state, payload) => {
            state.searchPath = payload;
        },
        SET_SEARCH_ON: (state, payload) => {
            state.searchOn = payload;
        },
        SET_NO_RESULT: (state, payload) => {
            state.noResult = payload;
        },
        SET_COUNT_OF_TOURS: (state, payload) => {
            state.countOfTours = payload;
        },
    },
    actions: {
        SET_COST: (context, payload) => {
            context.commit('SET_COST', payload);
        },
        SET_DATE: (context, payload) => {
            context.commit('SET_DATE', payload);
        },
        SET_PLACE_ID: (context, payload) => {
            context.commit('SET_PLACE_ID', payload);
        },
        SET_TOURS: (context, payload) => {
            context.commit('SET_TOURS', payload);
        },
        SET_SEARCH_PATH: (context, payload) => {
            context.commit('SET_SEARCH_PATH', payload);
        },
        SET_SEARCH_ON: (context, payload) => {
            context.commit('SET_SEARCH_ON', payload);
        },
        SET_NO_RESULT: (context, payload) => {
            context.commit('SET_NO_RESULT', payload);
        },
        SET_COUNT_OF_TOURS: (context, payload) => {
            context.commit('SET_COUNT_OF_TOURS', payload);
        },
    },
    getters: {
        GET_COST: state => {
            return state.cost;
        },
        GET_DATE: state => {
            return state.date;
        },
        GET_PLACE_ID: state => {
            return state.placeId;
        },
        GET_TOURS: state => {
            return state.tours;
        },
        GET_SEARCH_PATH: state => {
            return state.searchPath;
        },
        GET_SEARCH_ON: state => {
            return state.searchOn;
        },
        GET_NO_RESULT: state => {
            return state.noResult;
        },
        GET_COUNT_OF_TOURS: state => {
            return state.countOfTours;
        },
    }
})
