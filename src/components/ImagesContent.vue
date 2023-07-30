<template>
  <section class="section section-search" id="section-search">
    <div class="container">
      <form class="form form-search" @submit.prevent>
        <div class="input-search-wrapper">
          <input
              :value="searchWordValue"
              @input="searchWordValue = $event.target.value"
              type="text"
              class="input input-search"
              placeholder="Поиск">
          <button @click="searchImage" class="button button-search"></button>
        </div>
      </form>
    </div>
  </section>
  <section class="section section-content" id="section-content">
    <div class="container">
      <div class="images">
        <div class="images__wrapper">
          <ImagesItem
              v-for="image in allImages"
              :key="image.id"
              :imagesData="image"
              @imageClick="imageClick"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ImagesItem from "@/components/ImagesItem";
import ImageDetail from "@/components/ImageDetail";
import ImagesFavorite from "@/components/ImagesFavorite";
import {mapActions, mapGetters} from 'vuex';

export default {
  name: "ImagesContent",
  components: {
    ImagesItem,
    ImageDetail,
    ImagesFavorite
  },
  props: {},
  data() {
    return {
      imagesArr: null,
      searchWordValue: '',
      imageId: '',
    }
  },
  computed: {
    ...mapGetters([
      'allImages',
      'favoriteImages'
    ]),
  },
  methods: {
    ...mapActions([
      'GET_RANDOM_IMAGES_FROM_UNSPLASH',
      'GET_IMAGES_FROM_UNSPLASH_BY_SEARCH'
    ]),
    searchImage() {
      if (this.searchWordValue === '') {
        this.GET_RANDOM_IMAGES_FROM_UNSPLASH();
      } else {
        this.GET_IMAGES_FROM_UNSPLASH_BY_SEARCH(this.searchWordValue);
      }
    },
    imageClick(id) {
      this.$router.push({name: 'image-detail', query: {'image': id}});
    }
  },
  async mounted() {
    if (this.allImages.length === 0) {
      this.GET_RANDOM_IMAGES_FROM_UNSPLASH();
    }
  }
}
</script>

<style lang="scss" scoped>

</style>