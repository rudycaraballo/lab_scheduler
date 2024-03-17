<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    <h1 class="green">Hardcoded {{ msg }}</h1>
  </div>
</template>

<style scoped>
/*This is a scoped css tag that will only apply to this component */
</style>
