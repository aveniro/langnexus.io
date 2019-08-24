import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import overset from './overset';

Vue.config.productionTip = false;

Vue.use(overset, { locale: 'en' });

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');