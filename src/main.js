import Vue from 'vue';
import Router from 'vue-router';
import App from './App.vue';
import Main from './Main.vue';
import PhotographerRegistration from './PhotographerRegistration.vue';
import UserRegistration from './UserRegistration.vue';
import FormLogin from './FormLogin.vue';
import FullSearch from './FullSearch.vue';
import PhotographerPage from './PhotographerPage.vue';
import UserPage from './UserPage.vue';
import ApplicationForPhotoSession from './ApplicationForPhotoSession.vue';
import PrivateOffice from './PrivateOffice.vue';
import PageInformation from './PageInformation.vue';
import PhotoGallery from './PhotoGallery.vue';
import PageNotFound from './PageNotFound.vue';
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/ru-RU';
import 'element-ui/lib/theme-chalk/index.css';
import VuePaginate from 'vue-paginate';

window.$ = window.jQuery = require('jquery');

Vue.use(Router);
Vue.use(ElementUI, { locale });
Vue.use(VuePaginate);

const router = new Router({
 routes: [
  {
    path: '/',
    component: Main,
  },
 {
     path: "*",
     component: PageNotFound,
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
    path: '/photographer',
    name:'photographer',
    component: PhotographerPage,
    props: true,
  },
  {
    path: '/photopage',
    name:'photopage',
    component: PhotographerPage,
    props: true,
  },
  {
      path: '/userpage',
      name:'userpage',
      component: UserPage,
      props: true,
  },
  {
    path: '/reqphoto',
    name:'reqphoto',
    component: ApplicationForPhotoSession,
    props: true,
  },
  {
    path: '/lk',
    redirect: '/lk/pageinf',
    name:'lk',
    component: PrivateOffice,
    props: true,
    children: [
      {
        path: 'pageinf',
        name:'pageinf',
        component: PageInformation,
        props: true,
      },
      {
        path: 'gallery',
        name:'gallery',
        component: PhotoGallery,
        props: true,
      },
    ],
  },
 ]
})


new Vue({
  el: '#app',
  render: h => h(App),
  router
})