import router from '../../router/index'

export default {
  namespaced: true,
  state: {
    userData: null,
    username: null,
    password: null
  },

  getters: {
    isAuthenticated: (state) => state.userData !== null ? Object.entries(state.userData).length !== 0 : null,
    userData: (state) => state.userData
  },

  mutations: {
    setUserData (state, {data}) {
      state.userData = data
    }
  },

  actions: {
    fetchUserData ({commit}) {
      return axios.get('/api/auth/user').then(response => {
        commit('setUserData', response);
      });
    },

    sendLoginRequest ({commit}, data) {
      commit('setErrors', {}, { root: true });
      commit('setLoading', true, { root: true });
      const {query, ...postData} = data;

      return axios.post('/api/login', postData)
        .then((response) => {
          commit('setUserData', response);

          const redirectPath = query.redirect || "/";
          router.push(redirectPath);
        });
    },

    sendLogoutRequest ({commit, getters}) {
      if(getters.isAuthenticated) {
        return axios.post('/api/logout')
          .then(response => {
            commit('setUserData', response);

            router.push("/");
          });
      }

      router.push("/");
    },

    sendResetRequest ({commit, getters}, data) {
      commit('setErrors', {}, { root: true });
      commit('setLoading', true, { root: true });

      return axios.post('/api/password/email', data)
        .then(response => {
          commit('setStatus', response.data.status, { root: true });
          commit('setLoading', false, { root: true });
        });
    },

    resetPassword ({commit}, data) {
      commit('setErrors', {}, { root: true });
      commit('setLoading', true, { root: true });

      return axios.post('/api/password/reset', data)
        .then(response => {
          commit('setUserData', {data: null});

          router.push({
            name: "home"
          })
        });
    }
  }
}