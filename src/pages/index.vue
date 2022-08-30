<template>
  <b-container fluid class="position-absolute top-50 start-50">
    <b-row>
      <b-col class="text-center">
        <CTAButton />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import CTAButton from '@/components/buttons/CTAButton.vue';

export default {
  name: 'IndexPage',
  components: {
    CTAButton
  }
};
</script>

<style scoped>
.container-fluid {
  transform: translate(-50%, -50%);
  color: #ffda30;
  font-size: 5rem;
  margin: 0;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
</style>
