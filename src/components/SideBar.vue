<template>
  <div>
    <b-sidebar v-model="isOpen" right :title="title" width="576px">

      <template #header>
        <b-container fluid :style="style.header">
          <h2 v-text="title" />
          <p v-text="subtitle" />
          <vue-slick-carousel v-bind="carousel">
            <div
              v-for="item, index in itemList"
              :key="index"
              class="carousel-img-wrapper px-1 overflow-hidden"
            >
              <b-img
                :src="item.imageUrl"
                :alt="item.title"
                fluid
              />
            </div>
          </vue-slick-carousel>
        </b-container>
      </template>

    </b-sidebar>
  </div>
</template>

<script>
import store from '@/store';
import config from '@/../configs/config.json';
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';

export default {
  name: 'SideBar',
  components: {
    VueSlickCarousel,
  },
  computed: {
    isOpen: {
      get() {
        return store.getters.isSideBarOpen;
      },
      set(open) {
        store.commit('setSideBarOpen', open);
      },
    },
    currentPage() {
      let page = 0;

      if (config.flow.pages.length - 1 >= this.currentPageNumber >= 0) {
        page = this.currentPageNumber;
      }

      return config.flow.pages[page];
    },
  },
  data: () => ({
    carousel: {
      focusOnSelect: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
    },
    title: config.flow.carousel.defaultTitle,
    subtitle: `Total Item ${config.flow.carousel.defaultContent.length}`,
    itemList: config.flow.carousel.defaultContent,
    style: {
      header: {
        color: config.flow.carousel.color,
        backgroundColor: config.flow.carousel.backgroundColor,
        fontFamily: config.flow.carousel.fontFamily,
      },
    },
    currentPageNumber: 0,
  }),
};
</script>

<style scoped>
@import 'vue-slick-carousel/dist/vue-slick-carousel.css';
@import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';

::v-deep .b-sidebar {
  background-color: white !important;
}

::v-deep .b-sidebar .b-sidebar-header {
  display: flex;
  padding: 0;
}

::v-deep .slick-prev, ::v-deep .slick-next {
  background: white;
    z-index: 99;
    border-radius: 50%;
}

::v-deep .slick-prev {
  left: -7px;
}

::v-deep .slick-next {
    right: -7px;
}

::v-deep .slick-prev:before {
    content: '￩';
}

::v-deep .slick-next:before {
    content: '￫';
}

::v-deep .slick-prev:before, ::v-deep .slick-next:before {
    color: rgb(199, 161, 122);
}

.carousel-img-wrapper {
  border-radius: 12px
}
</style>
