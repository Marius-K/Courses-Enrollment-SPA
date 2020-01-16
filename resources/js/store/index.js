import Vue from 'vue'
import Vuex from 'vuex'
import menu from './modules/menu'
import home from './modules/home'
import courses from './modules/courses'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    menu, home, courses
  },

  state: { // = data
    
  },

  getters: { // = computed properties

  },

  mutations: {
    
  },

  actions: { 
    
  }
})