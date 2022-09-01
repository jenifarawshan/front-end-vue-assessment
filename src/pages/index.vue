<template>
  <b-container fluid class="d-flex h-100 justify-content-center align-items-center">
    <SideBar />
    <b-row>
      <b-col class="text-center">
        <CTAButton v-if="!isSideBarOpen" :action="openSideBar" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters } from 'vuex';
import store from '@/store';
import SideBar from '@/components/SideBar.vue';
import CTAButton from '@/components/buttons/CTAButton.vue';

export default {
  name: 'IndexPage',
  components: {
    CTAButton,
    SideBar
  },
  computed: {
    ...mapGetters(['isSideBarOpen']),
  },
  methods: {
    openSideBar() {
      store.commit('openSideBar');
    }
  }
};
</script>

<style scoped>
</style>
