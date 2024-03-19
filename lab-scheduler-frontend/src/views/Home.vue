<!-- <script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script> -->

<template>
  <div class="greetings">
    <h1 class="green">This is the landing page</h1>
    <RouterLink to="/login">login</RouterLink>
    <button>Log In</button>
  </div>
</template>

<style scoped>
/*This is a scoped css tag that will only apply to this component */
</style>
