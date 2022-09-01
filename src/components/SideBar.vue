<template>
  <div>

    <b-sidebar v-model="isOpen" right :title="title" width="576px">

      <b-button @click="close" :style="style.closeButton">Close</b-button>

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

      <b-container class="mt-5 mb-4">
        <h3 v-text="pageTitle" :style="style.pageTitle" />
        <p v-text="pageDescription" :style="style.pageDescription" />
      </b-container>

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
                :style="style.footer.skipButton"
                @click="goToNextPage()"
                >Skip</b-btn
              >
              <b-btn
                lg
                v-if="currentPageNumber > 1"
                variant="outline"
                :style="style.footer.restartButton"
                @click="restart()"
                >Restart</b-btn
              >
            </b-col>
            <b-col class="d-flex justify-content-end">
              <b-btn
                lg
                v-if="currentPageNumber > 1"
                class="back-button"
                :style="style.footer.backButton"
                @click="goToPrevPage()"
                >Back</b-btn
              >
              <b-btn
                lg
                v-if="currentPageNumber < totalPageNumber"
                :style="style.footer.nextButton"
                @click="goToNextPage()"
                >Next</b-btn
              >
              <b-btn lg v-else :style="style.footer.submitButton">Submit</b-btn>
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
    totalPageNumber: config.flow.pages.length,
    currentPageNumber: 1,
  }),
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
    pageTitle() {
      return config.flow.pages[this.currentPageNumber - 1].title.text;
    },
    pageDescription() {
      return config.flow.pages[this.currentPageNumber - 1].description.text;
    },
    style() {
      return {
        header: {
          color: config.flow.carousel.color,
          backgroundColor: config.flow.carousel.backgroundColor,
          fontFamily: config.flow.carousel.fontFamily,
        },
        closeButton: {
          color: config.flow.carousel.color,
          backgroundColor: config.flow.carousel.backgroundColor,
          fontFamily: config.flow.carousel.fontFamily,
          border: 'none',
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          height: '56px',
          width: '140px',
          position: 'absolute',
          top: '50%',
          left: '-98px',
          transform: 'rotate(-90deg)',
          zIndex: -1,
        },
        pageTitle: {
          color: config.flow.pages[this.currentPageNumber - 1].title.color,
          fontFamily: config.flow.pages[this.currentPageNumber - 1].title.fontFamily,
        },
        pageDescription: {
          color: config.flow.pages[this.currentPageNumber - 1].description.color,
          fontFamily: config.flow.pages[this.currentPageNumber - 1].description.fontFamily,
        },
        footer: {
          skipButton: {
            color: config.flow.pages[this.currentPageNumber - 1].footer.skipButton.color,
            backgroundColor:
              config.flow.pages[this.currentPageNumber - 1].footer.skipButton.backgroundColor,
            borderColor:
              config.flow.pages[this.currentPageNumber - 1].footer.skipButton.borderColor,
            fontFamily: config.flow.pages[this.currentPageNumber - 1].footer.skipButton.fontFamily,
          },
          restartButton: {
            color: config.flow.pages[this.currentPageNumber - 1].footer.restartButton.color,
            backgroundColor:
              config.flow.pages[this.currentPageNumber - 1].footer.restartButton.backgroundColor,
            borderColor:
              config.flow.pages[this.currentPageNumber - 1].footer.restartButton.borderColor,
            fontFamily:
              config.flow.pages[this.currentPageNumber - 1].footer.restartButton.fontFamily,
          },
          backButton: {
            color: config.flow.pages[this.currentPageNumber - 1].footer.backButton.backgroundColor,
            backgroundColor: 'rgba(199, 161, 122, 0.16)',
            border: 'none',
            fontFamily: config.flow.pages[this.currentPageNumber - 1].footer.backButton.fontFamily,
            marginRight: '8px',
          },
          nextButton: {
            color: config.flow.pages[this.currentPageNumber - 1].footer.nextButton.color,
            backgroundColor:
              config.flow.pages[this.currentPageNumber - 1].footer.nextButton.backgroundColor,
            borderColor:
              config.flow.pages[this.currentPageNumber - 1].footer.nextButton.borderColor,
            fontFamily: config.flow.pages[this.currentPageNumber - 1].footer.nextButton.fontFamily,
          },
          submitButton: {
            color:
              config.flow.pages[this.currentPageNumber - 1].footer.restartButton.backgroundColor,
            backgroundColor:
              config.flow.pages[this.currentPageNumber - 1].footer.restartButton.color,
            border: 'none',
            fontFamily:
              config.flow.pages[this.currentPageNumber - 1].footer.restartButton.fontFamily,
          },
        },
      };
    },
  },
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
    close() {
      store.commit('closeSideBar');
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
</style>
