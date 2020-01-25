require('./bootstrap');

import Vue from 'vue'
import store from './store'
import router from './router'
import App from './components/App'
import {currency} from './currency'
import Landing from './layouts/Landing'
import Auth from './layouts/Auth'

Vue.filter('currency', currency);

Vue.component('landing-layout', Landing);
Vue.component('auth-layout', Auth);

const app = new Vue({
    store,
    router,
    ...App
});