<template>
    <div class='main'>
        <header>
            <div>
<<<<<<< HEAD
                <img v-if='user.avatar' class="avatar" v-bind:src="'http://photobb.dev.webant.ru/uploads/'+user.avatar.path" v-bind:alt='user.avatar.name'>
                <div v-else class='avatar'>
=======
                <div class='avatar'>
>>>>>>> 4b611bd0d709569dd1cc625eacdcd08c1e4d5bc6
                    <img src="./assets/images/camera.png" alt='camera'>
                </div>
            </div>
        </header>
        <main>
            <div>
<<<<<<< HEAD
                <h1>{{ user.name }} {{ user.surname }} ({{ user.username }})</h1>
=======
                <h1>Андрей Иванов (AIvan)</h1>
>>>>>>> 4b611bd0d709569dd1cc625eacdcd08c1e4d5bc6
                <p>Фотограф на Кипре и по всему миру ,семейные, индивидуальные, и лавстори фотосессии. 
                Создание семейных видеороликов. Провезу Вас по лучшим местам для фотосъемок</p>
                <div class='contacts'>
                    <div>
                        <h3>Номер телефона</h3>
<<<<<<< HEAD
                        <span>Не указан</span>
                    </div>
                    <div>
                        <h3>E-mail</h3>
                        <span>{{ user.email }}</span>
=======
                        <span>+7 909 999 99 99</span>
                    </div>
                    <div>
                        <h3>E-mail</h3>
                        <span>andri@mail.ru</span>
>>>>>>> 4b611bd0d709569dd1cc625eacdcd08c1e4d5bc6
                    </div>
                </div>
            </div>
            <div>
                <h3>Ближайшие поездки</h3>
<<<<<<< HEAD
                <div class="block">
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
                    <paginate-links class="paginate-links"
                            for="tours"
                            :show-step-links="true">
                    </paginate-links>
=======
                <div>
                    <div class='card'>
                        <h4>Бали, Индонезия</h4>
                        <div>
                            <p>с 20.11.2018 по 20.12.2018</p>
                            <span>1000 руб./час</span>
                        </div>
                    </div>
                    <div class='card'>
                        <h4>Петропавловск-Камчатский, Россия</h4>
                        <div>
                            <p>с 20.11.2018 по 20.12.2018</p>
                            <span>договорная</span>
                        </div>
                    </div>
                    <div class='card'>
                        <h4>Бали, Индонезия</h4>
                        <div>
                            <p>с 20.11.2018 по 20.12.2018</p>
                            <span>1000 руб./час</span>
                        </div>
                    </div>
                </div>
                <div class="block">
                    <el-pagination
                        layout="prev, pager, next"
                        :total="30">
                    </el-pagination>
>>>>>>> 4b611bd0d709569dd1cc625eacdcd08c1e4d5bc6
                </div>
            </div>
        </main>
    </div>
</template>

<script>
import axios from 'axios';
import store from "../store";

export default {
    data() {
      return {
<<<<<<< HEAD
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
    mounted() {
        axios
        .get('https://cors-anywhere.herokuapp.com/http://photobb.dev.webant.ru/api/v1/users/'+store.state.userId+'.json')
        .then(response => { 
            this.user = response.data;
        });
        axios
            .get('https://cors-anywhere.herokuapp.com/http://photobb.dev.webant.ru/api/v1/tours.json?user='+store.state.userId)
            .then(response => {
                this.tours = response.data.items;
                this.countOfTours = response.data.count;
            });
    },
    methods: {
        reformatDate: function(date) {
            let newDate = new Date(date);
            let day = newDate.getDate();
            let month = newDate.getMonth() + 1;
            let fullYear = newDate.getFullYear();
            let parseDate = day + "." + month + "." + fullYear;
            return parseDate;
        },
=======
      }
    },
    mounted() {
        axios
        .get('https://cors-anywhere.herokuapp.com/http://photobb.dev.webant.ru//api/v1/users/'+store.state.userId+'.json')
        .then(response => { 
            
        });
        
>>>>>>> 4b611bd0d709569dd1cc625eacdcd08c1e4d5bc6
    },
}
</script>

<style scoped>
.avatar {
    width: 8rem;
    height: 8rem;
    background: #DBDBDB;
    border-radius: 50%;
<<<<<<< HEAD
    object-fit: cover;
=======
>>>>>>> 4b611bd0d709569dd1cc625eacdcd08c1e4d5bc6
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

.card {
<<<<<<< HEAD
    display: flex;
    flex-direction: column;
    justify-content: space-between;
=======
>>>>>>> 4b611bd0d709569dd1cc625eacdcd08c1e4d5bc6
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.15);
    border-radius: 8px;
    padding: 0.5rem;
    width: 30%;
    margin-right: 1.5rem;
}
<<<<<<< HEAD
.block {
    display: flex;
    flex-direction: column;
}

.paginate-list {
    display: flex;
    flex-direction: row;
}

.paginate-links {
    display: flex;
    flex-direction: row;
    justify-content: center;
    list-style: none;
    margin-bottom: 5rem;
}
=======
>>>>>>> 4b611bd0d709569dd1cc625eacdcd08c1e4d5bc6

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

<<<<<<< HEAD
=======
main > div:last-child > div {
    display: flex;
    flex-direction: row;
}

.el-pagination {
    margin: 2rem auto;
}
>>>>>>> 4b611bd0d709569dd1cc625eacdcd08c1e4d5bc6

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