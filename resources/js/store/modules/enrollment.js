import router from "../../router";

export default {
  namespaced: true,
  state: {

  },

  getters: {
    enrollments: (state) => state.coursesData,
    pagination: (state) => state.paginationData
  },

  mutations: {

  },

  actions: {
    sendEnrollRequest ({commit}, data) {
      commit('setLoading', true, { root: true });

      return axios.post("/api/enroll", data)
        .then(response => {
          commit('auth/setUserData', response, {root: true});

          router.push({
            name: "my-courses"
          });
        })
        .catch(({response}) => {
          if(response.status === 422) {
            commit('setErrors', response.data.errors, { root: true });
          }
          
          commit('setLoading', false, { root: true });
        });
    }
  }
}