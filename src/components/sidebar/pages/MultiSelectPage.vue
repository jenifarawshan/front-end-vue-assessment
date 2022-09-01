<template>
  <b-container fluid>
    <b-row>
      <b-col
        cols="4"
        v-for="(item, index) in itemList"
        :key="index"
        style="padding: 5px"
        @click="selectItem(item)"
      >
        <SideBarIconCard
          :color="cardFontColor"
          :backgroundColor="cardBackgroundColor"
          :selectedBorderColor="cardSelectedBorderColor"
          :title="item.title"
          :iconUrl="item.icon"
        />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import store from '@/store';
import SideBarIconCard from '@/components/sidebar/IconCard.vue';

export default {
  name: 'SideBarIconPage',
  props: {
    itemList: {
      type: Array,
      default: () => [],
    },
    cardFontColor: {
      type: String,
    },
    cardBackgroundColor: {
      type: String,
    },
    cardSelectedBorderColor: {
      type: String,
    },
  },
  components: {
    SideBarIconCard,
  },
  methods: {
    isItemAlreadyAdded(item) {
      return store.getters.getItemList.find((x) => x.title === item.title);
    },
    addItem(item) {
      store.commit('addItem', item);
    },
    removeItem(item) {
      store.commit('removeItem', item);
    },
    selectItem(item) {
      if (this.isItemAlreadyAdded(item)) {
        this.removeItem(item);
      } else {
        this.addItem(item);
      }
    },
  },
};
</script>
