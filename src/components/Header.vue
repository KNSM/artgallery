<template>
  <header
      class="header"
      id="header"
      :class="layout"
  >
    <div class="container">
      <div class="header__wrapper">
        <div class="header__logo">
          <RouterLink to="/">
            <img src="@/assets/img/logo.svg" alt="" class="image">
          </RouterLink>
        </div>
        <div class="header__actions">
          <div class="header__actions-wrapper">
            <RouterLink
                to="/"
                class="link link-search"
                v-if="this.isHome"
            >
              <img src="@/assets/img/icon-magnifier-white.svg" alt="" class="image">
              Поиск
            </RouterLink>
            <RouterLink to="/images-favorite" class="link link-favorites">
              <img src="@/assets/img/icon-like.svg" alt="" class="image">
              Избранное
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      isHome: '',
    }
  },
  computed: {
    layout() {
      if (this.$route.path !== '/') {
        this.isHome = true;
        return "header--inner"
      } else {
        this.isHome = false;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>