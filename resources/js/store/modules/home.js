import axios from 'axios'

export default {
  namespaced: true,
  state: {
    newestCourses: [],
    randomInstitutions: [],
  },

  getters: {
    courses (state) {
      return state.newestCourses;
    },

    institutions (state) {
      return state.randomInstitutions;
    }
  },

  mutations: {
    setHomeData (state, {data}) {
      state.newestCourses = data.newestCourses;
      state.randomInstitutions = data.randomInstitutions;
    },
  },

  actions: {
    fetchHomeData ({commit}) {
      axios.get('/api/home').then((response) => {
        commit('setHomeData', response);
      });
    }
  }
}