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
          commit('auth/setUserData', response.data, {root: true});

          router.push({
            name: "enrollments.index"
          });
        });
    }
  }
}