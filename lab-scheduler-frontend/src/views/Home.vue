 <script setup>
import Hero from "../components/Hero.vue" 
import RoomCard from "../components/RoomHomeCard.vue"

let testEnv = () => console.log(import.meta.env.VITE_MSAL_AUTHORITY);

defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script> 

<template>
  <div class="hero-section">
    <Hero />
  </div>

  <div class="album py-5 bg-body-tertiary">
    <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

        <RoomCard />
        <RoomCard />
        <RoomCard />

      </div>
    </div>
  </div>

  <div class="container">
    <hr class="featurette-divider">
  <div class="row featurette">
    <div class="col-md-7">
      <h2 class="featurette-heading fw-normal lh-1">Multiple Conference Rooms available <span class="text-body-secondary">It’ll blow your mind.</span></h2>
      <p class="lead">Some great placeholder content for the first rooms that will be descirbed.</p>
    </div>
    <div class="col-md-5">
      <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"/><text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">500x500</text></svg>
    </div>
  </div>
  </div>

</template>

<style scoped>
.hero-section {
  height: 75vh !important;
  margin-top: 70px;
}

.rm-section {
  background-color: grey;
}
</style>
