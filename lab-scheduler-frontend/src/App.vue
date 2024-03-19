<!--importing components from vue-->
<!-- <script setup>
import HomePage from "./components/pages/HomePage.vue";
</script> -->

<template>
  <header>
    <!-- TODO: add Unigather genrated logo -->
    <img
      alt="Vue logo"
      class="logo"
      src="./assets/logo.svg"
      width="125"
      height="125"
    />
  </header>
  <div>
    <router-view />
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}
</style>
./views/HomePage.vue
