<template>
  <div class="images__item">
    <RouterLink :to="linkOpen" @click="imageClick">
      <div class="image-wrapper"
           :style="{backgroundImage: 'url(' + imagesData.urls.small + ')', backgroundSize: 'cover'}">
      </div>
    </RouterLink>
  </div>
</template>

<script>
export default {
  name: "ImageFavoriteItem",
  props: {
    imagesData: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    imageClick() {
      this.$emit('imageClick', this.imagesData.id);
    }
  },
  computed: {
    linkOpen() {
      return `/image-${this.imagesData.id}`;
    }
  }
}
</script>

<style lang="scss" scoped>

</style>