<template>
  <b-card-group deck>
    <div
      class="position-relative overflow-hidden"
      :class="{ 'selected-card': isItemAlreadyAdded }"
      :style="selectedBorderStyle"
    >
      <div
        v-if="isItemAlreadyAdded"
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

      <div
        v-if="isItemAlreadyAdded"
        class="position-absolute"
        :style="{ top: '3px', right: '6px', 'z-index': 100 }"
      >
        <BIconCheckCircleFill :style="{ color: '#fff' }" />
      </div>

      <b-card align="center" :style="style">
        <b-img :src="iconUrl" :alt="title"></b-img>
        <b-card-text v-text="title" class="text-center" />
      </b-card>
    </div>
  </b-card-group>
</template>

<script>
import { mapGetters } from 'vuex';
import { BIconCheckCircleFill } from 'bootstrap-vue';

export default {
  name: 'SideBarCard',
  props: {
    title: {
      type: String,
    },
    iconUrl: {
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
  components: {
    BIconCheckCircleFill,
  },
  data() {
    return {
      style: {
        color: this.color,
        backgroundColor: this.backgroundColor,
        borderColor: '#E0E0E0',
        selectedBorderColor: this.selectedBorderColor,
        borderStyle: 'solid',
        borderWidth: '1px',
        height: '100%',
        borderRadius: '10px',
      },
      selectedBorderStyle: {
        backgroundColor: this.selectedBorderColor,
        borderRadius: '12px',
      },
    };
  },
  computed: {
    ...mapGetters(['getItemList']),
    isItemAlreadyAdded() {
      return this.getItemList.find((x) => x.title === this.title);
    },
  },
};
</script>

<style scoped>
.card-img-top {
  width: fit-content;
  margin: auto;
}
.selected-card {
  padding: 2px;
}
.selected-card .card {
  border: none;
}
</style>
