<template>
<div>
    <div class='header'>
      <div class='search'>
        <div class='description'>
          <div class='block'>
            <h2>Получите профессиональные фото с отдыха</h2>
            <span class='desc'>46 доступных фотографов, путешествующих по всему миру</span>
          </div>
          <router-link
            class="link"
            :to="{ name: 'reg'}">
            Вы фотограф?
          </router-link>
        </div>
        <app-search></app-search>
      </div>
    </div>
    <app-tours-list class='tourslist'></app-tours-list>
</div>
</template>

<script>
import Search from './Search.vue';
import FormLogin from './FormLogin.vue';
import ToursList from './ToursList.vue';
import store from '../store'

export default {
    components: {
    "app-search": Search,
    "app-form": FormLogin,
    "app-tours-list": ToursList,
  },
}
</script>

<style>
    .tourslist {
      margin: auto;
      margin-bottom: 15px;
      width: 80% !important; 
    }
@media (max-width: 600px) {
    .block {
        display: none;
    }
    .header {
        height: 100vh;
    }
}
</style>