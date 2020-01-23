import axios from 'axios'

export default {
  namespaced: true,
  state: {
    coursesData: [],
    paginationData: {},
    course: {}
  },

  getters: {
    courses (state) {
      return state.coursesData;
    },

    pagination (state) {
      return state.paginationData;
    },

    course (state) {
      return state.course;
    }
  },

  mutations: {
    setAllCourses (state, data) {
      state.coursesData = data;
    },

    setPaginationData (state, data) {
      state.paginationData = data;
    },

    setCourse (state, {data}) {
      state.course = data;
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
    },

    fetchCourse ({commit}, id) {
      axios.get('/api/courses/'+id)
      .then(response => {
        commit('setCourse', response.data);
      });
    }
  }
};