<template>
  <header class="header" id="header">
    <div class="container">
      <div class="header__wrapper">
        <div class="header__logo">
          <RouterLink to="/">
            <img src="@/assets/img/logo.svg" alt="" class="image">
          </RouterLink>
        </div>
        <div class="header__favorites">
          <RouterLink to="/images-favorite" class="link link-favorites">
            <img src="@/assets/img/icon-like.svg" alt="" class="image">
            Избранное
          </RouterLink>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style lang="scss" scoped>
</style>