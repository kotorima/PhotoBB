<template>
  <div id="app">
    <el-menu
        default-active="activeIndex"
        mode="horizontal"
        @select="handleSelect">
        <el-menu-item index="1">
          <router-link :to="{name: 'search'}"><img src="./assets/images/search.png" alt="search" class='loupe'></router-link>
        </el-menu-item>
        <el-menu-item index="2">
          <router-link to="/"><span class='logo'>PhotoBB</span></router-link>
        </el-menu-item>
        <el-menu-item v-if='!authorized' index="3">
          <router-link :to="{ name: 'login'}">Войти</router-link>
        </el-menu-item>
        <el-submenu v-else index="3" class="navselect">
            <template slot="title">
                <img v-if="user.avatar" v-bind:src="'http://photobb.dev.webant.ru/uploads/'+user.avatar.path" :alt="user.avatar.name">
                {{ user.name }}
            </template>
            <el-menu-item index="3-1">
                <router-link class="navselect" :to="{ name: 'reqphoto'}">Создать заявку</router-link>
            </el-menu-item>
            <el-menu-item index="3-2">
                <router-link class="navselect" :to="{ name: 'photopage'}">Моя страница</router-link>
            </el-menu-item>
            <el-menu-item index="3-3">
                <router-link class="navselect" :to="{ name: 'lk'}">Личный кабинет</router-link>
            </el-menu-item>
            <el-menu-item index="3-4">
                <a href="#" class="navselect" v-on:click="signOut">Выход</a>
            </el-menu-item>
        </el-submenu>
    </el-menu>
      <router-view></router-view>
    <footer>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
    </footer>
  </div>
</template>

<script>
import Main from './Main.vue';
import store from '../store';

export default {
  data() {
    return {
      reg: null,
        activeIndex: '1',
    };
  },
  components: {
    "app-main": Main,
  },
  computed: {
      authorized: {
          get: function() {
              return store.state.authorized;
          },
          set: function(value) {
              store.dispatch('SET_AUTHORIZED', value);
          }
      },
      user: {
          get: function() {
              return store.state.user;
          },
          set: function(value) {
              store.dispatch('SET_USER', value);
          }
      },
  },
methods: {
    handleSelect(key, keyPath) {

    },
    signOut(){
        this.authorized = false;
        store.dispatch('SIGNOUT');
        this.$router.push('/');
    }
},
  beforeRouteLeave (to, from, next) {
        next();
  },
};
</script>

<style>
@font-face {
    font-family: "Roboto";
    src: url("assets/fonts/Roboto/Roboto-Regular.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: "Exo2";
    src: url("assets/fonts/Exo2/Exo2-Regular.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: "Exo2";
    src: url("assets/fonts/Exo2/Exo2-Bold.ttf") format("truetype");
    font-weight: bold;
    font-style: normal;
}

  
  a,
  h2,
  h1,
  h3,
  h4,
  .link {
    font-family: "Exo2";
    color: #000000;
    font-weight: normal;
  }

  a,
  .link {
     text-decoration: none;
     font-size: 1rem;
     font-weight: bold;
  }

  a, 
  button, 
  input[type='submit'], 
  input[type='button'],
  .link {
     cursor: pointer;
  }

  h2 {
    font-weight: normal;
    margin: 0;
  }

  p {
      margin: 0;
  }

  p, span, textarea {
    font-family: "Roboto";
    font-size: 0.9rem;
  }

  desc {
    color: #8A8A8A;
  }

  .description {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 1rem;
  }

  .link {
    font-weight: normal;
    font-family: "Roboto";
    margin-bottom: 0.7rem;
  }

  .search {
    width: 70vw;
    display:flex;
    flex-direction: column;
    padding: 4% 3%;
    margin-top: 27vh;
    background: rgba(255, 255, 255, 0.7);
    box-shadow: 0px 10px 4px rgba(0, 0, 0, 0.15);
    border-radius: 8px;
  }

  .header {
    background: url('assets/images/background.png');
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 42rem;
    margin-bottom: 30vh !important;
  }
  .logo {
  font-size: 1.5rem;
}

a > img {
  width: 2rem;
  height: 2rem;
}

footer {
  display: flex;
  height: 6rem;
  box-shadow: 0px -10px 10px rgba(0, 0, 0, 0.05);
  color: #4F4F4F;
  margin-top: auto;
}

footer > p {
  width: 30%;
  margin: auto;
  text-align: center;
}

.el-menu {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 6rem;
  background: #ffffff;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.05);
}

.el-menu-item:nth-child(2) {
 margin: 0 30vw;
}

.navselect {
    font-family: 'Roboto';
    font-weight: normal;
    font-size: 1rem;
}

@media (max-width: 1400px) {
    .search {
        margin-top: 20vh;
    }
    .header {
        height: 30rem;
    }
}

@media (max-width: 950px) {
  .search {
    margin-top: 35vh;
  }
  .header {
    height: 30rem;
  }
}

@media (max-width: 800px) {
  h2 {
    font-size: 1.2rem;
  }
  span {
    font-size: 0.8rem;
  }
  .el-menu-item:nth-child(2) {
    margin: 0 auto;
  }
  footer > p {
    width: 50%;
  }
}

@media (max-width: 600px) {
  footer > p {
    width: 70%;
  }
}

@media (max-width: 400px) {
  .logo {
    font-size: 1.2rem;
  }
  .loupe {
    width: 1.5rem;
    height: 1.5rem;
  }
  .el-menu {
    height: 4rem;
  }
}

</style>