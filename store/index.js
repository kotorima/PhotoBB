import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
        cost: 0,
        date: [],
        place: '',
        tours: [],
        search: false,
	},
	mutations: {
		SET_COST: (state, payload) => {
            state.cost = payload;
        },
        SET_DATE: (state, payload) => {
            state.date = payload;
        },
        SET_PLACE: (state, payload) => {
            state.place = payload;
        },
        SET_TOURS: (state, payload) => {
            state.tours = payload;
        },
        SET_SEARCH: (state, payload) => {
            state.search = payload;
        },
    },
    actions: {
        SET_COST: (context, payload) => {
            context.commit('SET_COST', payload);
        },
        SET_DATE: (context, payload) => {
            context.commit('SET_DATE', payload);
        },
        SET_PLACE: (context, payload) => {
            context.commit('SET_PLACE', payload);
        },
        SET_TOURS: (context, payload) => {
            context.commit('SET_TOURS', payload);
        },
        SET_SEARCH: (context, payload) => {
            context.commit('SET_SEARCH', payload);
        },
    },
    getters: {
        GET_COST: state => {
            return state.cost;
        },
        GET_DATE: state => {
            return state.date;
        },
        GET_PLACE: state => {
            return state.place;
        },
        GET_TOURS: state => {
            return state.tours;
        },
        GET_SEARCH: state => {
            return state.search;
        },
    }
})
