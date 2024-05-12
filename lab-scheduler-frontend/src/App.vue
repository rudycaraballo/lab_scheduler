
<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <Navbar />
  <router-view />
  <Footer />
</template>

<style scoped>
header {
  line-height: 1.5;
}
</style>
