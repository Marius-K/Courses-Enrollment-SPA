require('./bootstrap');

import Vue from 'vue'
import store from './store'
import router from './router'
import App from './components/App'
import {currency} from './helpers/currency'
import Landing from './layouts/Landing'
import Auth from './layouts/Auth'

Vue.filter('currency', currency);

Vue.component('landing-layout', Landing);
Vue.component('auth-layout', Auth);

Vue.component('TheHeader', require('./components/Landing/TheHeader.vue').default);
Vue.component('TheFooter', require('./components/Landing/TheFooter.vue').default);
Vue.component('TheBreadcrumb', require('./components/Landing/TheBreadcrumb.vue').default);
Vue.component('ThePagination', require('./components/Landing/ThePagination.vue').default);

axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    store.commit('setLoading', false);

    if (error.response.status === 500) {
        alert(error.response.data.message);
    } else if (error.response.status === 422) {
        store.commit('setErrors', error.response.data.errors);
    } else if (error.response.status === 401) {
        store.commit('auth/setUserData', {data: null});
        router.push({name: 'login'});
    } else {
        return Promise.reject(error);
    }
});

const app = new Vue({
    store,
    router,
    ...App
});