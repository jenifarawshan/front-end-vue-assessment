<template>
  <h1 class="welcome-message" id="welcome-message">Welcome Challenger!</h1>
</template>

<script>
import store from '@/store';

export default {
  name: 'App',
  store,
};
</script>

<style scoped>
@import 'bootstrap/dist/css/bootstrap.css';
@import 'bootstrap-vue/dist/bootstrap-vue.css';

.welcome-message {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ffda30;
  font-size: 5rem;
  margin: 0;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
</style>
