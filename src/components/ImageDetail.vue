<template>
  <section class="section section-image-detail" id="section-image-detail">
    <div class="image-detail-bg">
      <img :src="image.urls.raw" alt="" class="image">
    </div>
    <div class="container">
      <div class="image-detail-block">
        <div class="image-detail__wrapper">
          <div class="image-detail__item image-author">
            <div class="image-author__wrapper">
              <div class="image-author__image">
                <img :src="image.user.profile_image.small" alt="" class="image">
              </div>
              <div class="image-author__content">
                <div class="image-author__name">
                  <p class="text">
                    {{ image.user.name }}
                  </p>
                </div>
                <div class="image-author__nickname">
                  <p class="text">
                    @{{ image.user.username }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="image-detail__item image-actions">
            <div class="image-actions__wrapper">
              <button
                  class="btn btn-favorite"
                  @click="toggleFavorite"
                  :class="{ disabled: isDisabled }"
              >
                <img src="@/assets/img/icon-like-black.svg" alt="" class="image">
              </button>
              <a class="btn btn-download" :href="image.urls.raw + '.jpg'" download>
                <img src="@/assets/img/icon-download.svg" alt="" class="image">
                Download
              </a>
            </div>
          </div>
        </div>
        <div class="image-detail__content">
            <img :src="image.urls.raw" alt="" class="image">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";

export default {
  name: 'ImageDetail',
  props: {},
  data() {
    return {
      isDisabled: false,
    }
  },
  computed: {
    ...mapGetters([
      'allImages',
      'favoriteImages'
    ]),
    image() {
      let result = {};
      let vm = this;
      this.allImages.map(function (item) {
        if (item.id === vm.$route.query.image) {
          result = item;
        }
      });

      return result;
    },
  },
  methods: {
    ...mapMutations(['ADD_FAVORITES_IMAGES_TO_STATE']),
    toggleFavorite() {
      if (!this.favoriteImages.includes(this.image)) {
        this.ADD_FAVORITES_IMAGES_TO_STATE(this.image);
        this.isDisabled = true;
      }
    },
    checkFavorite() {
      if (this.favoriteImages.includes(this.image)) {
        this.isDisabled = true;
      }
    }
  },
  mounted() {
    this.checkFavorite();
  }
}
</script>

<style lang="scss" scoped>

</style>