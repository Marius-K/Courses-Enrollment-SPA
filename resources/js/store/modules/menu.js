import axios from 'axios'

export default {
  namespaced: true,
  state: {
    institutions: [],
    disciplines: []
  },

  getters: {
    menuInstitutions (state) {
      return state.institutions;
    },

    menuDisciplines (state) {
      return state.disciplines;
    }
  },

  mutations: {
    setMenuData (state, {data}) {
      state.disciplines = data.menuDisciplines;
      state.institutions = data.menuInstitutions;
    }
  },

  actions: {
    fetchMenuData ({commit}) {
      axios.get('/api/menu').then((response) => {
        commit('setMenuData', response);
      });
    }
  }
}