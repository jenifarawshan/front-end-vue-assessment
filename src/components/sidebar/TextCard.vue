<template>
  <b-card :title="title" :style="style" class="position-relative overflow-hidden">
    <div
      v-if="isItemAlreadyAdded"
      class="position-absolute"
      :style="{
        content: '',
        background: isItemAlreadyAdded ? selectedBorderColor : '#E0E0E0',
        width: '100px',
        height: '200px',
        top: '-150px',
        right: '-20px',
        transform: 'rotate(-49deg)',
        'z-index': 10,
      }"
    ></div>

    <div
      v-if="isItemAlreadyAdded"
      class="position-absolute"
      :style="{ top: '3px', right: '6px', 'z-index': 100 }"
    >
      <BIconCheckCircleFill :style="{ color: '#fff' }" />
    </div>

    <b-card-text v-text="description" />
  </b-card>
</template>

<script>
import { mapGetters } from 'vuex';

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
  computed: {
    ...mapGetters(['getItemList']),
    isItemAlreadyAdded() {
      return this.getItemList.find((x) => x.title === this.title);
    },
    style() {
      return {
        height: '150px',
        color: this.color,
        borderRadius: '12px',
        borderColor: this.isItemAlreadyAdded ? this.selectedBorderColor : '#E0E0E0',
        borderStyle: 'solid',
        borderWidth: this.isItemAlreadyAdded ? '2px' : '1px',
      };
    },
  },
};
</script>

<style scoped>
.card {
  margin-bottom: 5px;
}
</style>
