export default {
  namespaced: true,
  state: {
    coursesData: [],
    paginationData: {},
    course: {}
  },

  getters: {
    courses: (state) => state.coursesData,
    pagination: (state) => state.paginationData,
    course: (state) => state.course
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
      return axios.get('/api/courses', {params: query})
          .then(response => {
            const {data, ...pagination} = response.data;
            commit('setAllCourses', data);
            commit('setPaginationData', pagination);
            commit('setLoading', false, { root: true });
          });
    },

    fetchCourse ({commit}, id) {
      return axios.get('/api/courses/'+id)
          .then(response => {
            commit('setCourse', response.data);
            commit('setLoading', false, { root: true });
          });
    },

    fetchMyCourses ({commit}, query) {
      return axios.get('/api/my-courses', {params: query})
          .then(response => {
            const {data, ...pagination} = response.data;
            commit('setAllCourses', data);
            commit('setPaginationData', pagination);
            commit('setLoading', false, { root: true });
          });
    }
  }
};