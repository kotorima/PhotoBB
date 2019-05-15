import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		cost: 0
	},
	mutations: {
		SET_COUNT: (state, payload) => {
            state.cost = payload
        }
    },
    actions: {
        SET_COUNT: (context, payload) => {
            context.commit('SET_COUNT', payload)
        }
    },
    getters: {
        GET_COUNT: state => {
            return state.cost
        }
    }
})
