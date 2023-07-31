<template>
  <section class="section section-favorite" id="section-favorite">
    <div class="container">
      <div class="section__title">
        <h1 class="text">Избранное</h1>
      </div>
      <div class="images">
        <div class="images__wrapper">
          <ImageFavoriteItem
              v-for="image in favoriteImages"
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
import ImageFavoriteItem from "@/components/ImageFavoriteItem";
import {mapGetters} from "vuex";

export default {
  name: 'ImagesFavorite',
  components: {
    ImageFavoriteItem
  },
  computed: {
    ...mapGetters([
      'favoriteImages'
    ]),
  },
  methods: {
    imageClick(id) {
      this.$router.push({name: 'image-detail', query: {'image': id}});
    }
  }
}
</script>

<style lang="scss" scoped>

</style>