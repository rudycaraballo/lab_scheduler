<!--importing components from vue-->
<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <!-- TODO: add Unigather genrated logo -->
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="Unigather" />
    </div>
  </header>

</template>

<style scoped>
header {
  line-height: 1.5;
}

</style>
