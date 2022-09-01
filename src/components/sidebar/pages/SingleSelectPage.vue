<template>
  <b-container>
    <b-row>
      <b-col cols="12" v-for="(item, index) in itemList" :key="index" @click="selectItem(item)">
        <SideBarTextCard
          :title="item.title"
          :description="item.description"
          :color="cardFontColor"
          :backgroundColor="cardBackgroundColor"
          :selectedBorderColor="cardSelectedBorderColor"
        />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import store from '@/store';
import SideBarTextCard from '@/components/sidebar/TextCard.vue';

export default {
  name: 'SideBarSingleSelectPage',
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
    SideBarTextCard,
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
      this.itemList.map((x) => {
        this.removeItem(x);
        return true;
      });
      this.addItem(item);
    },
  },
};
</script>
