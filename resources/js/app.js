import Vue from 'vue'
import store from './store'
import router from './router'
import App from './components/App'
import {currency} from './currency'
import Landing from './layouts/Landing'

Vue.filter('currency', currency);

Vue.component('landing-layout', Landing);

const app = new Vue({
    store,
    router,
    ...App
});