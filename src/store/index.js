import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sideBarOpen: false,
    itemList: [],
  },
  getters: {
    isSideBarOpen(state) {
      return state.sideBarOpen;
    },
    getItemList(state) {
      return state.itemList;
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
    },
    addItem(state, item) {
      state.itemList.push(item);
    },
    removeItem(state, item) {
      state.itemList = state.itemList.filter((x) => x.title !== item.title);
    },
  },
  actions: {
  },
  modules: {
  },
});
