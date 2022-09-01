import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sideBarOpen: false
  },
  getters: {
    isSideBarOpen(state) {
      return state.sideBarOpen;
    }
  },
  mutations: {
    setSideBarOpen(state, open) {
      state.sideBarOpen = open;
    },
    openSideBar(state) {
      state.sideBarOpen = true;
    },
    closeSideBar(state) {
      state.sideBarOpen = false;
    },
    toggleSideBar(state) {
      state.sideBarOpen = !this.sideBarOpen;
    }
  },
  actions: {
  },
  modules: {
  },
});
