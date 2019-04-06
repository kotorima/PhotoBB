<template>
  <div id="app">
    <app-nav-menu></app-nav-menu>
    <div class='header'>
      <app-steps></app-steps>
      <div class='search'>
        <div class='description'>
          <div>
            <h2>Получите профессиональные фото с отдыха</h2>
            <span>46 доступных фотографов, путешествующих по всему миру</span>
          </div>
          <a>Вы фотограф?</a>
        </div>
        <app-search></app-search>
      </div>
      </div>
      <app-form></app-form>
      <app-tours-list></app-tours-list>
  </div>
</template>

<script>
import NavMenu from "./NavMenu.vue";
import Steps from './Steps.vue';
import Search from './Search.vue';
import FormLogin from './FormLogin.vue';
import ToursList from './ToursList.vue';

export default {
  data() {
    return {
    };
  },
  components: {
    "app-nav-menu": NavMenu,
    "app-steps": Steps,
    "app-search": Search,
    "app-form": FormLogin,
    "app-tours-list": ToursList,
  }
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

#app {
    background: url('assets/images/background.png');
    background-repeat: no-repeat;
}
  
  a,
  h2 {
    font-family: "Exo2";
    color: #000000;
  }

  a {
     text-decoration: none;
     font-size: 1rem;
     font-weight: bold;
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

  span {
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
  }

  .search {
    width: 60%;
    display:flex;
    flex-direction: column;
    padding: 4% 3%;
    background: rgba(255, 255, 255, 0.7);
    box-shadow: 0px 10px 4px rgba(0, 0, 0, 0.15);
    border-radius: 8px;
  }

  .header {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 48rem;
  }
</style>