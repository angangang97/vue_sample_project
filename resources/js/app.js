// require('./bootstrap');
// import router from './routes';

// window.Vue = require('vue').default;
// // Sweet Alert
// window.swal = require('sweetalert2')
// window.toast = swal.mixin({
//     toast: true,
//     position: 'top-end',
//     showConfirmButton: false,
//     timer: 3000
//   });

// Vue.component('users', require('./components/Users.vue').default);
// Vue.component('navbar', require('./partials/Navbar.vue').default);
// Vue.component('home', require('./components/Home.vue').default);

// const app = new Vue({
//     el: '#app',
//     router
// });
require('./bootstrap');
import vue from 'vue'
window.Vue = vue;

import App from './components/App.vue';
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';
import {routes} from './routes';
 
Vue.use(VueRouter);
Vue.use(VueAxios, axios);
 
const router = new VueRouter({
    mode: 'history',
    routes: routes
});
 
const app = new Vue({
    el: '#app',
    router: router,
    render: h => h(App),
});