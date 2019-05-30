import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
        cost: 0,
        date: Date,
        place: '',
	},
	mutations: {
		SET_COST: (state, payload) => {
            state.cost = payload;
        }
    },
    actions: {
        SET_COST: (context, payload) => {
            context.commit('SET_COST', payload);
        }
    },
    getters: {
        GET_COST: state => {
            return state.cost;
        }
    }
})
