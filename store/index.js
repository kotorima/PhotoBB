import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
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
        loading: true,
        authorized: false,
        accessToken: localStorage.getItem('access_token'),
        refreshToken: localStorage.getItem('refresh_token'),
        userId: 0,
        user: [],
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
        SET_LOADING: (state, payload) => {
            state.loading = payload;
        },
        SET_AUTHORIZED: (state, payload) => {
            state.authorized = payload
        },
        SET_ACCESS_TOKEN: (state, payload) => {
            state.accessToken = payload
        },
        SET_REFRESH_TOKEN: (state, payload) => {
            state.refreshToken = payload
        },
        SET_USER_ID: (state, payload) => {
            state.userId = payload
        },
        SET_USER: (state, payload) => {
            state.user = payload
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
        SET_LOADING: (context, payload) => {
            context.commit('SET_LOADING', payload);
        },
        SET_ACCESS_TOKEN: (context, payload) => {
            context.commit('SET_ACCESS_TOKEN', payload);
        },
        SET_REFRESH_TOKEN: (context, payload) => {
            context.commit('SET_REFRESH_TOKEN', payload);
        },
        SET_USER_ID: (context, payload) => {
            context.commit('SET_USER_ID', payload);
        },
        SET_USER: (context, payload) => {
            context.commit('SET_USER', payload);
        },
        CHANGE_AUTHORIZED: (context, payload) => {
            let data
            if (payload != null) {
                data = payload
            } else {
                if (localStorage.getItem('access_token')){
                    data = true
                } else {
                    data = false
                }
            }
            context.commit('SET_AUTHORIZED', data)
        },
        CHANGE_TOKEN: (context, params) => {
            let data
            if (params.data != null) {
                data = params.data
            } else {
                data = localStorage.getItem(`${params.type}_token`)
            }
            context.commit(`SET_${params.type.toUpperCase()}_TOKEN`, data)
        },
        AUTHORIZATION: (context, parametrs) =>  {
            let access_token;
            let refresh_token;
            return axios('https://cors-anywhere.herokuapp.com/http://photobb.dev.webant.ru/oauth/v2/token', {
               method: 'GET',
               params: {
                    client_id: parametrs.client_id,
                    grant_type: parametrs.grant_type,
                    client_secret: parametrs.client_secret,
                    username: parametrs.username,
                    password: parametrs.password,
               }
            }).then(response=>{
                access_token = response.data.access_token;
                refresh_token = response.data.refresh_token;
                localStorage.setItem('access_token', access_token);
                localStorage.setItem('refresh_token', refresh_token);
                return axios.get('https://cors-anywhere.herokuapp.com/http://photobb.dev.webant.ru//api/v1/user/current', {
                    headers: {
                        Authorization: 'Bearer ' + access_token
                    }
                })
                .then(answer => {
                    console.log(answer.data.id);
                    context.dispatch('SET_USER_ID', answer.data.id);
                    context.dispatch('CHANGE_AUTHORIZED', true);
                    context.dispatch('CHANGE_TOKEN', {
                        type: 'access', 
                        data: access_token
                    })
                    context.dispatch('CHANGE_TOKEN', {
                        type: 'refresh', 
                        data: refresh_token
                    })
                })
            })
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
        GET_LOADING: state => {
            return state.loading;
        },
        GET_USER_ID: state => {
            return state.userId;
        },
        GET_USER: state => {
            return state.user;
        },
        GET_AUTHORIZED: state => {
            return state.authorized
        },
        GET_ACCESS_TOKEN: state => {
            return state.accessToken
        },
        GET_REFRESH_TOKEN: state => {
            return state.refreshToken
        },
    }
})
