 <script setup>
import Hero from "../components/Hero.vue" 
import RoomCard from "../components/HomeCard.vue"
import FAQ from  "../components/FAQS.vue"
import { ref, onBeforeMount} from "vue";
import axios from "axios";

let rooms = ref([]);

//Loading all rooms before mounting
onBeforeMount(async () => {
  try {
    const response = await axios.get('http://localhost:3000/available-rooms');
    rooms.value = response.data.slice(0,3);

    console.log(rooms.value);
    
  } catch (error) {
    console.error('Error fetching users:', error);
  }}
)

</script> 

<template>
  <div class="hero-wrapper section">
    <Hero />
  </div>

  <div class="album py-5 section" data-aos="fade-up" data-aos-duration="2000">
    <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <RoomCard v-for="room in rooms" :key="room.id" :room="room" />
      </div>
    </div>
  </div>

  <div id="features" class="container section" data-aos="fade-right" data-aos-duration="3000">
 
  <div class="row featurette">
    <div class="col-md-5">
      <h2 class="featurette-heading fw-normal lh-1">Multiple Conference Rooms available <span class="text-body-secondary">It’ll blow your mind.</span></h2>
      <p class="lead">Some great placeholder content for the first rooms that will be descirbed.</p>
    </div>
    <div class="col-md-7">
      <img class="campus-img" src="/src/assets/images/mainCampus.jpg" alt="" srcset="">
    </div>
  </div>
  </div>
  
    <FAQ />
   

</template>

<style scoped>
.section {
  height: 80vh !important;
}

.hero-wrapper {
  /* background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/src/assets/images/mainCampus.JPG"); */
  /* background-image: url("/src/assets/images/mainCampus.JPG"); */
  /* background-repeat: no-repeat;
  background-size: 2000px;
  background-position: 100% 38%;  */


  /* margin-top: 70px; */
}

.campus-img {
  max-width: 630px;

  border-radius: 50px !important;
}

.rm-section {
  background-color: white !important;
}

</style>
