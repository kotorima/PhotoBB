<template>
  <div id="app">
    <app-nav-menu></app-nav-menu>
    <app-photo-form v-if="photographerReg"></app-photo-form>
    <div v-if="!photographerReg" class='header'>
      <app-steps></app-steps>
      <div class='search'>
        <div class='description'>
          <div>
            <h2>Получите профессиональные фото с отдыха</h2>
            <span class='desc'>46 доступных фотографов, путешествующих по всему миру</span>
          </div>
          <a v-on:click="registration">Вы фотограф?</a>
        </div>
        <app-search></app-search>
      </div>
    </div>
    <app-form v-if="!photographerReg"></app-form>
    <app-tours-list v-if="!photographerReg"></app-tours-list>
  </div>
</template>

<script>
import NavMenu from "./NavMenu.vue";
import Steps from './Steps.vue';
import Search from './Search.vue';
import FormLogin from './FormLogin.vue';
import ToursList from './ToursList.vue';
import PhotographerRegistration from './PhotographerRegistration.vue';

export default {
  data() {
    return {
      photographerReg: false,
    };
  },
  components: {
    "app-nav-menu": NavMenu,
    "app-steps": Steps,
    "app-search": Search,
    "app-form": FormLogin,
    "app-tours-list": ToursList,
    "app-photo-form": PhotographerRegistration,
  },
  methods: {
    registration: function () {
      this.photographerReg = true;
    }
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
  h3 {
    font-family: "Exo2";
    color: #000000;
    font-weight: normal;
  }

  a {
     text-decoration: none;
     font-size: 1rem;
     font-weight: bold;
  }

  a, button, input[type='submit'], input[type='button'] {
     cursor: pointer;
  }

  h2 {
    font-weight: normal;
    margin: 0;
  }

  p, span {
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

  .description > a{
    font-weight: normal;
    font-family: "Roboto";
    margin-bottom: 0.7rem;
  }

  .search {
    width: 70vw;
    display:flex;
    flex-direction: column;
    padding: 4% 3%;
    margin-top: 65vh;
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
  }
</style>