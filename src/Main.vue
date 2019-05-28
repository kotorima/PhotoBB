<template>
<div>
    <div class='header'>
      <app-steps></app-steps>
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
    <app-tours-list></app-tours-list>
</div>
</template>

<script>
import Steps from './Steps.vue';
import Search from './Search.vue';
import FormLogin from './FormLogin.vue';
import ToursList from './ToursList.vue';

export default {
    components: {
    "app-steps": Steps,
    "app-search": Search,
    "app-form": FormLogin,
    "app-tours-list": ToursList,
  },
}
</script>

<style>
    .header {
        margin-bottom: 10vh;
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