<template>
  <b-container fluid>
    <b-row>
      <b-col cols="4" v-for="(card, index) in cardList" :key="index" style="padding: 5px">
        <SideBarIconCard
          :color="cardFontColor"
          :backgroundColor="cardBackgroundColor"
          :selectedBorderColor="cardSelectedBorderColor"
          :title="card.title"
          :iconUrl="card.icon"
        />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import SideBarIconCard from '@/components/sidebar/IconCard.vue';

export default {
  name: 'SideBarIconPage',
  props: {
    cardList: {
      type: Array,
      default: () => ([]),
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
};
</script>
