<template>
  <Header></Header>

  <MainWrapper></MainWrapper>
</template>

<script>
import Header from "@/components/Header";
import MainWrapper from "@/components/MainWrapper.vue";

export default {
  name: "App",
  components: {
    Header, MainWrapper,
  }
}
</script>