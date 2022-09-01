<template>
  <b-container fluid class="d-flex h-100 justify-content-center align-items-center">
    <SideBar />
    <b-row>
      <b-col class="text-center">
        <CTAButton :action="openSideBar" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import store from '@/store';
import SideBar from '@/components/SideBar.vue';
import CTAButton from '@/components/buttons/CTAButton.vue';

export default {
  name: 'IndexPage',
  components: {
    CTAButton,
    SideBar
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
