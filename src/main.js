import Vue from 'vue';
import Router from 'vue-router';
import App from './App.vue';
import Main from './Main.vue';
import PhotographerRegistration from './PhotographerRegistration.vue';
import UserRegistration from './UserRegistration.vue';
import FormLogin from './FormLogin.vue';
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/ru-RU';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Router);
Vue.use(ElementUI, { locale });

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

 ]
})


new Vue({
  el: '#app',
  render: h => h(App),
  router
})