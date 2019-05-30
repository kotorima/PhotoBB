import Vue from 'vue';
import Router from 'vue-router';
import App from './App.vue';
import Main from './Main.vue';
import PhotographerRegistration from './PhotographerRegistration.vue';
import UserRegistration from './UserRegistration.vue';
import FormLogin from './FormLogin.vue';
import FullSearch from './FullSearch';
import PhotographerPage from './PhotographerPage';
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/ru-RU';
import 'element-ui/lib/theme-chalk/index.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

Vue.use(Router);
Vue.use(ElementUI, { locale });

library.add(faCoffee);

Vue.component('awesome', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  el: '#photopage',
  components: { PhotographerPage },
  template: '<PhotographerPage/>'
});

const router = new Router({
 routes: [
  {
    path: '/',
    component: Main,
  },
   {
      path: '/reg',
      name:'reg',
      component: PhotographerRegistration,
      props: true,
  },
  {
    path: '/usreg',
    name:'usreg',
    component: UserRegistration,
    props: true,
  },
  {
    path: '/login',
    name:'login',
    component: FormLogin,
    props: true,
  },
  {
    path: '/search',
    name:'search',
    component: FullSearch,
    props: true,
  },
  {
    path: '/photopage',
    name:'photopage',
    component: PhotographerPage,
    props: true,
  },
 ]
})


new Vue({
  el: '#app',
  render: h => h(App),
  router
})