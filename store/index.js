import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
	state: {
        cost: 0,
        date: [],
        place: {},
        tours: [],
        searchPath: '',
        registrationPath: '',
        searchOn: false,
        noResult: false,
        countOfTours: 0,
        loading: true,
        authorized: false,
        accessToken: localStorage.getItem('access_token'),
        refreshToken: localStorage.getItem('refresh_token'),
        userId: 0,
        userRole: '',
        user: [],
        changingUser: {},
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
        SET_SEARCH_PATH: (state, payload) => {
            state.searchPath = payload;
        },
        SET_REGISTRATION_PATH: (state, payload) => {
            state.registrationPath = payload;
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
        SET_USER_ROLE: (state, payload) => {
            state.userRole = payload
        },
        SET_USER: (state, payload) => {
            state.user = payload
        },
        SET_CHANGING_USER: (state, payload) => {
            state.changingUser = payload
        },
        SET_USER_AVATAR: (state, payload) => {
            state.user.avatar = payload
        }
    },
    actions: {
        SET_USER_AVATAR: (context, payload) => {
            context.commit('SET_USER_AVATAR', payload)
        },
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
        SET_SEARCH_PATH: (context, payload) => {
            context.commit('SET_SEARCH_PATH', payload);
        },
        SET_REGISTRATION_PATH: (context, payload) => {
            context.commit('SET_REGISTRATION_PATH', payload);
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
        SET_USER_ROLE: (context, payload) => {
            context.commit('SET_USER_ROLE', payload);
        },
        SET_USER: (context, payload) => {
            context.commit('SET_USER', payload);
        },
        SET_CHANGING_USER: (context, payload) => {
            context.commit('SET_CHANGING_USER', payload);
        },
        SET_AUTHORIZED: (state, payload) => {
            state.authorized = payload
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
        REGISTRATION: (context, parametrs) => {
            let userParams = {
                client_id: parametrs.client_id,
                grant_type: parametrs.grant_type,
                client_secret: parametrs.client_secret,
                name: parametrs.name,
                surname: parametrs.surname,
                username: parametrs.username,
                email: parametrs.email,
                password: parametrs.password,
                roles: ['ROLE_USER'],
            };
            console.log(userParams);
            if (this.registrationPath === 'reg') {
                userParams.roles[0] = 'ROLE_PHOTO';
                let photoParams = {
                    mobile: parametrs.mobile,
                    description: parametrs.description,
                    avatar: {
                        name: parametrs.name,
                        path: parametrs.path,
                    },
                };
                userParams = Object.assign(userParams, photoParams);
                console.log('merge ' +userParams);
            }

            return axios({
                method: 'POST',
                url: 'https://cors-anywhere.herokuapp.com/http://photobb.dev.webant.ru/api/v1/users.json',
                data: userParams,
            })
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
                    context.dispatch('SET_USER_ID', answer.data.id);
                    context.dispatch('SET_USER_ROLE', answer.data.roles);
                    context.dispatch('CHANGE_AUTHORIZED', true);
                    context.dispatch('CHANGE_TOKEN', {
                        type: 'access', 
                        data: access_token
                    });
                    context.dispatch('CHANGE_TOKEN', {
                        type: 'refresh', 
                        data: refresh_token
                    });
                })
            })
        },
        SIGNOUT: (context) => {
            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');

            context.commit('SET_AUTHORIZED', false);
            context.commit('SET_ACCESS_TOKEN', '');
            context.commit('SET_REFRESH_TOKEN', '');
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
        GET_SEARCH_PATH: state => {
            return state.searchPath;
        },
        GET_REGISTRATION_PATH: state => {
            return state.registrationPath;
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
        GET_USER_ROLE: state => {
            return state.userRole;
        },
        GET_USER: state => {
            return state.user;
        },
        GET_CHANGING_USER: state => {
            return state.changingUser;
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
