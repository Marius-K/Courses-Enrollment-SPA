export default {
  namespaced: true,
  state: {
    institutions: [],
    disciplines: []
  },

  getters: {
    menuInstitutions: (state) => state.institutions,
    menuDisciplines: (state) => state.disciplines
  },

  mutations: {
    setMenuData (state, {data}) {
      state.disciplines = data.menuDisciplines;
      state.institutions = data.menuInstitutions;
    }
  },

  actions: {
    fetchMenuData ({commit}) {
      return axios.get('/api/menu').then((response) => {
        commit('setMenuData', response);
      });
    }
  }
}