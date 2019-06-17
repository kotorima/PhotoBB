<template>
    <div class='main' v-loading="loading">
        <header>
            <div>
                <img v-if='user.avatar' class="avatar" v-bind:src="'http://photobb.dev.webant.ru/uploads/'+user.avatar.path" v-bind:alt='user.avatar.name'>
                <div v-else class='avatar'>
                    <img src="./assets/images/camera.png" alt='camera'>
                </div>
            </div>
        </header>
        <main>
            <div>
                <h1>{{ user.name }} {{ user.surname }} ({{ user.username }})</h1>
                <p v-if="user.description"> {{ user.description }} </p>
                <p v-else> Информация о себе не указана </p>
                <div class='contacts'>
                    <div>
                        <h3>Номер телефона</h3>
                        <span>Не указан</span>
                    </div> 
                    <div>
                        <h3>E-mail</h3>
                        <span v-if="user.email">{{ user.email }}</span>
                        <span v-else>Не указан</span>
                    </div>
                </div>
            </div>
            <div>
                <h3>Ближайшие поездки</h3>
                <div v-if="tours == 0" class="block">
                    <span>Туров не имеется</span>
                </div>
                <div v-else class="block">
                    <paginate name="tours" :list="tours" ref="paginator" class="paginate-list">
                        <div class='card' v-for="tour in paginated('tours')" :key="tour.id">
                            <h4>{{ tour.city.location_name }}</h4>
                            <div>
                                <p>c {{ reformatDate(tour.start_date) }} по {{ reformatDate(tour.finish_date) }}</p>
                                <span v-if="!tour.cost"> договорная </span>
                                <span v-else>{{ tour.cost }} руб./час</span>
                            </div>
                        </div>
                    </paginate>
                    <paginate-links 
                    class="paginate-links"
                    for="tours"
                    :show-step-links="true">
                    </paginate-links>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
    import axios from 'axios';
    import store from "../store";
    import {reformatDate} from './mixins/reformatDate.js';

    export default {
        mixins: [reformatDate],
        data() {
            return {
                user: store.state.user,
                tours: [],
                paginate: ['tours'],
            }
        },
        watch: {
            user: function () {
                store.dispatch('SET_USER', this.user);
            },
        },
        computed: {
            loading: {
                get: function () {
                    return store.state.loading;
                },
                set: function (value) {
                    store.dispatch('SET_LOADING', value);
                }
            },
            authorized: {
                get: function() {
                    return store.state.authorized;
                },
                set: function(value) {
                    store.dispatch('SET_AUTHORIZED', value);
                }
            },
        },
        mounted() {
            if (!this.authorized) {
                this.$router.push('/login');
            }
            else {
                this.loading = true;
                axios
                    .get('https://cors-anywhere.herokuapp.com/http://photobb.dev.webant.ru/api/v1/users/' + store.state.userId + '.json')
                    .then(response => {
                        this.user = response.data;
                        this.loading = false;
                    });
                axios
                    .get('https://cors-anywhere.herokuapp.com/http://photobb.dev.webant.ru/api/v1/tours.json?user=' + store.state.userId)
                    .then(response => {
                        this.tours = response.data.items;
                        this.countOfTours = response.data.count;
                    });
            }
        },
    }
</script>

<style scoped>
    .avatar {
        width: 8rem;
        height: 8rem;
        background: #DBDBDB;
        border-radius: 50%;
        object-fit: cover;
    }
    .avatar > img {
        display: flex;
        margin: auto;
        padding-top: 3rem;
        width: 2rem;
        height: 2rem;
    }
    header {
        background: url('assets/images/ava.png');
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    header > div:first-child {
        margin-left: auto;
        padding: 2rem 5rem;
    }
    header > div:last-child {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 2rem 0;
    }
    main {
        display: flex;
        flex-direction: column;
        margin: auto;
        width: 80%;
        padding-left: 1rem;
    }
    h1 {
        text-align: center;
    }
    main > div:first-child {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    main > div:first-child > p {
        width: 65%;
        text-align: center;
    }
    .contacts {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin-top: 2rem;
        width: 70%;
    }
    .contacts > div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .contacts > div > span {
        color: #4F4F4F;
    }
    
    .block {
        display: flex;
        flex-direction: column;
    }

    .block > span{
        text-align: center;
        color: #8A8A8A;
        margin: 3rem 0 5rem;
    }

    .paginate-list {
        display: flex;
        flex-direction: row;
        padding: 0;
    }
    .paginate-links {
        display: flex;
        flex-direction: row;
        justify-content: center;
        list-style: none;
        margin-bottom: 5rem;
    }
    .card {
        box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.15);
        border-radius: 8px;
        padding: 1rem;
        margin-right: 1rem;
        width: 28%;
    }

    .card p {
        font-size: 0.7rem;
        margin: 0.5rem 0;
    }
    .card span {
        color: #EC7948;
        font-size: 0.85rem;
        margin: 0.5rem 0;
    }
    .card > div {
        display: flex;
        flex-direction:row;
        justify-content: space-between;
    }
    h4 {
        margin-top: 0;
    }
    @media (max-width: 1100px) {
        .card > div {
            display: flex;
            flex-direction: column;
        }
        .card > h4 {
            margin: 0;
        }
    }
    @media (max-width: 900px) {
        .block2 > div > div {
            flex-direction: column;
            width: 70%;
        }
        .block2 > div > div > h3 {
            margin-bottom: 1rem;
        }
    }
    @media (max-width: 600px) {
        main > div:last-child > div {
            display: flex;
            flex-direction: column;
        }
        .card {
            width: 90%;
            margin-bottom: 1rem;
        }
    }
    @media (max-width: 450px) {
        .contacts {
            flex-direction: column;
            margin-top: 2rem;
        }
        .block2 {
            width: 70%;
        }
        .block2 > div {
            flex-direction: column;
        }
        .block2 > div > h3 {
            text-align: left;
            font-size: 1.05rem;
            margin-top: 0.5rem;
        }
    }
</style>
