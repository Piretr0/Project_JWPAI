import Vue from 'vue';
import App from './App.vue';
import store from './store';
import VueLayers from 'vuelayers';
import 'vuelayers/lib/style.css';
import './quasar';

Vue.use(VueLayers);
Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
