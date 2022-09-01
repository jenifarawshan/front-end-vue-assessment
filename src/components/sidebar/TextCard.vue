<template>
  <b-card :title="title" :style="style" class="position-relative overflow-hidden">

    <div
      class="position-absolute"
      :style="{
        content: '',
        background: selectedBorderColor,
        width: '100px',
        height: '200px',
        top: '-150px',
        right: '-20px',
        transform: 'rotate(-49deg)',
        'z-index': 10,
      }"
    ></div>

    <div class="position-absolute" :style="{ top: '3px', right: '6px', 'z-index': 100 }">
      <BIconCheckCircleFill :style="{ color: '#fff' }" />
    </div>

    <b-card-text v-text="description" />
  </b-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    color: {
      type: String,
    },
    backgroundColor: {
      type: String,
    },
    selectedBorderColor: {
      type: String,
    },
  },
  data() {
    return {
      style: {
        height: '150px',
        color: this.color,
        borderRadius: '12px',
        borderColor: this.selectedBorderColor,
        borderStyle: 'solid',
        borderWidth: '1px',
      },
    };
  },
};
</script>

<style scoped>
.card {
  margin-bottom: 5px;
}
</style>
