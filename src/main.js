import Vue from 'vue';
import Router from 'vue-router';
import App from './App.vue';
import Main from './Main.vue';
import PhotographerRegistration from './PhotographerRegistration.vue';
import UserRegistration from './UserRegistration.vue';
import FormLogin from './FormLogin.vue';
import FullSearch from './FullSearch.vue';
import PhotographerPage from './PhotographerPage.vue';
import Dialogue from './Dialogue.vue';
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/ru-RU';
import 'element-ui/lib/theme-chalk/index.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faVk } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

Vue.use(Router);
Vue.use(ElementUI, { locale });

library.add(faVk);

Vue.component('awesome', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  el: '#login',
  components: { FormLogin },
  template: '<FormLogin/>'
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
  {
    path: '/dialog',
    name:'dialog',
    component: Dialogue,
    props: true,
  },
 ]
})


new Vue({
  el: '#app',
  render: h => h(App),
  router
})