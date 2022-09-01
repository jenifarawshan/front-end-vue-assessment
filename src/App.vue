<template>
  <IndexPage />
</template>

<script>
import store from '@/store';
import IndexPage from '@/pages/index.vue';

export default {
  name: 'App',
  store,
  components: {
    IndexPage
  }
};
</script>

<style>
@import 'bootstrap/dist/css/bootstrap.css';
@import 'bootstrap-vue/dist/bootstrap-vue.css';
@import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
</style>
