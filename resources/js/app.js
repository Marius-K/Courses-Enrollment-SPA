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

axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    store.commit('setLoading', false);

    if (error.response.status === 500) {
        alert(error.response.data.message);
    } else if (error.response.status === 422) {
        store.commit('setErrors', error.response.data.errors);
    } else {
        return Promise.reject(error);
    }
});

const app = new Vue({
    store,
    router,
    ...App
});