export default {
  namespaced: true,
  state: {
    newestCourses: [],
    randomInstitutions: [],
  },

  getters: {
    courses: (state) => state.newestCourses,
    institutions: (state) => state.randomInstitutions
  },

  mutations: {
    setHomeData (state, {data}) {
      state.newestCourses = data.newestCourses;
      state.randomInstitutions = data.randomInstitutions;
    },
  },

  actions: {
    fetchHomeData ({commit}) {
      return axios.get('/api/home')
        .then(response => {
          commit('setHomeData', response);
          commit('setLoading', false, { root: true });
        });
    }
  }
}