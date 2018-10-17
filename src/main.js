import Vue from 'vue';
import Vuikit from 'vuikit';
import VuikitIcons from '@vuikit/icons';
import '@vuikit/theme/dist/vuikit.min.css';

import App from './App.vue';
import router from './router';
import store from './store';


Vue.config.productionTip = false;
Vue.use(Vuikit);
Vue.use(VuikitIcons);

Vue.filter('currency', (value) => {
  const formatted = value || 0;
  return formatted.toLocaleString({
    style: 'currency',
    currency: 'USD',
    minimumSignificantDigits: 2,
  });
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
