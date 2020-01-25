import Vue from 'vue'
import Vuex from 'vuex'
import menu from './modules/menu'
import home from './modules/home'
import courses from './modules/courses'
import auth from './modules/auth'
import enrollment from './modules/enrollment'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    menu, home, courses, auth, enrollment
  },

  state: { // = data
    errors: [],
    loading: true,
    status: null,
    breadcrumb: false
  },

  getters: { // = computed properties
    errors: (state) => state.errors,
    status: (state) => state.status,
    loading: (state) => state.loading,
    breadcrumb: (state) => state.breadcrumb
  },

  mutations: {
    setErrors (state, errors) {
      state.errors = errors;
    },

    setStatus (state, status) {
      state.status = status;
    },

    setLoading (state, loading) {
      state.loading = loading;
    },

    setBreadcrumb (state, breadcrumb) {
      state.breadcrumb = breadcrumb;
    }
  },

  actions: { 

  }
})