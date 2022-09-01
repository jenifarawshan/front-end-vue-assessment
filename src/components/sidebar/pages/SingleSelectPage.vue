<template>
  <b-container>
    <SideBarTextCard
      v-for="(card, index) in cardList"
      :key="index"
      :title="card.title"
      :description="card.description"
      :color="cardFontColor"
      :backgroundColor="cardBackgroundColor"
      :selectedBorderColor="cardSelectedBorderColor"
    />
  </b-container>
</template>

<script>
import SideBarTextCard from '@/components/sidebar/TextCard.vue';

export default {
  name: 'SideBarSingleSelectPage',
  props: {
    cardList: {
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
};
</script>
