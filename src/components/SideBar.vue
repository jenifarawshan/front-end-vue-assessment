<template>
  <div>
    <b-sidebar v-model="isOpen" right :title="title" width="576px" />
  </div>
</template>

<script>
import store from '@/store';
import config from '@/../configs/config.json';

export default {
  name: 'SideBar',
  computed: {
    isOpen: {
      get() {
        return store.getters.isSideBarOpen;
      },
      set(open) {
        store.commit('setSideBarOpen', open);
      },
    },
  },
  data: () => ({
    title: config.flow.carousel.defaultTitle
  }),
};
</script>

<style scoped>
::v-deep .b-sidebar {
  background-color: white !important;
}

::v-deep .b-sidebar .b-sidebar-header {
  display: flex;
  padding: 0;
}
</style>
