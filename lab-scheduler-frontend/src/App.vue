<!--importing components from vue-->
<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <!-- TODO: add Unigather genrated logo -->
  <!-- TODO: add a navbar that will persist throughout the website -->
  <Navbar />
  <router-view />
  <Footer />
</template>

<style scoped>
header {
  line-height: 1.5;
}
</style>
