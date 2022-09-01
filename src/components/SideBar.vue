<template>
  <div>
    <b-sidebar v-model="isOpen" right :title="title" width="576px">
      <template #header>
        <b-container fluid :style="style.header">
          <h2 v-text="title" />
          <p v-text="subtitle" />
          <vue-slick-carousel v-bind="carousel">
            <div
              v-for="(item, index) in itemList"
              :key="index"
              class="carousel-img-wrapper px-1 overflow-hidden"
            >
              <b-img :src="item.imageUrl" :alt="item.title" fluid />
            </div>
          </vue-slick-carousel>
        </b-container>
      </template>

      <SideBarSingleSelectPage
        v-if="currentPage.selectionType === 'single'"
        :itemList="currentPage.cards"
        :cardFontColor="currentPage.cardFontColor"
        :cardBackgroundColor="currentPage.cardBackgroundColor"
        :cardSelectedBorderColor="currentPage.selectedBorderColor"
      />

      <SideBarMultiSelectPage
        v-if="currentPage.selectionType === 'multi'"
        :itemList="currentPage.cards"
        :cardFontColor="currentPage.cardFontColor"
        :cardBackgroundColor="currentPage.cardBackgroundColor"
        :cardSelectedBorderColor="currentPage.selectedBorderColor"
      />

      <template #footer>
        <b-container>
          <b-row>
            <b-col>
              <b-btn
                lg
                v-if="currentPageNumber === 1"
                variant="outline"
                class="skip-button"
                @click="goToNextPage()"
                >Skip</b-btn
              >
              <b-btn
                lg
                v-if="currentPageNumber > 1"
                variant="outline"
                class="restart-button"
                @click="restart()"
                >Restart</b-btn
              >
            </b-col>
            <b-col class="d-flex justify-content-end">
              <b-btn lg v-if="currentPageNumber > 1" class="back-button" @click="goToPrevPage()"
                >Back</b-btn
              >
              <b-btn
                lg
                v-if="currentPageNumber < totalPageNumber"
                class="next-button"
                @click="goToNextPage()"
                >Next</b-btn
              >
              <b-btn lg v-else class="submit-button">Submit</b-btn>
            </b-col>
          </b-row>
        </b-container>
      </template>
    </b-sidebar>
  </div>
</template>

<script>
import store from '@/store';
import config from '@/../configs/config.json';
import VueSlickCarousel from 'vue-slick-carousel';
import SideBarSingleSelectPage from '@/components/sidebar/pages/SingleSelectPage.vue';
import SideBarMultiSelectPage from '@/components/sidebar/pages/MultiSelectPage.vue';

export default {
  name: 'SideBar',
  components: {
    VueSlickCarousel,
    SideBarSingleSelectPage,
    SideBarMultiSelectPage,
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
      let page = 1;

      if (this.totalPageNumber >= this.currentPageNumber >= page) {
        page = this.currentPageNumber;
      }

      return config.flow.pages[page - 1];
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
    totalPageNumber: config.flow.pages.length,
    currentPageNumber: 1,
  }),
  methods: {
    goToPrevPage() {
      if (this.currentPageNumber > 1) {
        this.currentPageNumber -= 1;
      }
    },
    goToNextPage() {
      if (this.currentPageNumber < this.totalPageNumber) {
        this.currentPageNumber += 1;
      }
    },
    restart() {
      this.currentPageNumber = 1;
      store.commit('clearAllItems');
    },
  },
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

::v-deep .slick-prev,
::v-deep .slick-next {
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

::v-deep .slick-prev:before,
::v-deep .slick-next:before {
  color: rgb(199, 161, 122);
}

.carousel-img-wrapper {
  border-radius: 12px;
}

::v-deep .b-sidebar-footer {
  height: 70px;
  padding: 15px 20px;
  border-top: 1px solid #e0e0e0;
}

.btn {
  padding: 8px 32px;
}

.btn:focus {
  box-shadow: none;
}

.skip-button {
  color: rgb(199, 161, 122);
  border: none;
}

.restart-button {
  color: rgb(199, 161, 122);
  border-color: rgb(199, 161, 122);
}

.back-button {
  color: rgb(199, 161, 122);
  background-color: rgba(199, 161, 122, 0.16);
  border-color: rgba(199, 161, 122, 0.16);
  margin-right: 8px;
}

.next-button {
  background-color: rgb(199, 161, 122);
  border-color: rgb(199, 161, 122);
}

.submit-button {
  background-color: rgb(199, 161, 122);
  border-color: rgb(199, 161, 122);
}
</style>
