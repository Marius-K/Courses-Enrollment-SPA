import Vue from 'vue'
import store from './store'
import router from './router'
import App from './components/App'
import {currency} from './currency'

Vue.filter('currency', currency);

const app = new Vue({
    store,
    router,
    ...App
});