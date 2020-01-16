import axios from 'axios'

export default {
  namespaced: true,
  state: {
    coursesData: [],
    paginationData: {}
  },

  getters: {
    courses (state) {
      return state.coursesData;
    },

    pagination (state) {
      return state.paginationData;
    }
  },

  mutations: {
    setAllCourses (state, data) {
      state.coursesData = data;
    },

    setPaginationData (state, data) {
      state.paginationData = data;
    }
  },

  actions: { 
    fetchAllCourses ({commit}, query) {
      axios.get('/api/courses', {params: query})
      .then(response => {
        const {data, ...pagination} = response.data;
        commit('setAllCourses', data);
        commit('setPaginationData', pagination);
      });
    }
  }
};