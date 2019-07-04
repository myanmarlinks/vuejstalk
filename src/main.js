import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './components/App.vue';
import router from "./router";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.use(VueRouter);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
