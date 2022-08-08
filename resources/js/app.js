require('./bootstrap');
import router from './routes';

window.Vue = require('vue').default;
// Sweet Alert
window.swal = require('sweetalert2')
window.toast = swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
  });

Vue.component('users', require('./components/Users.vue').default);
Vue.component('navbar', require('./partials/Navbar.vue').default);
Vue.component('home', require('./components/Home.vue').default);

const app = new Vue({
    el: '#app',
    router
});