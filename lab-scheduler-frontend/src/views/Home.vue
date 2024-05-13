 <script setup>
import Hero from "../components/Hero.vue" 
import RoomCard from "../components/HomeCard.vue"
import FAQ from  "../components/FAQS.vue"
import { ref, onBeforeMount} from "vue";
import axios from "axios";
import { API_ENDPOINT } from "../../global";

let rooms = ref([]);

//Loading all rooms before mounting
onBeforeMount(async () => {
  try {
    const response = await axios.get(`${API_ENDPOINT}/available-rooms`);
    rooms.value = response.data.slice(0,3);
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
      <h2 class="featurette-heading fw-normal lh-1">Multiple Conference Rooms Available <span class="text-body-secondary"></span></h2>
      <p class="lead">Located at SUNY Old Westbury we have a variatey of conference rooms, labs, and classrooms ready to be reserved 
        throughout the semester. Whether you need a temporary classroom for a presentation, a conference room for a meeting, or a space for an event, we have it!</p>
    </div>
    <div class="col-md-7">
      <img class="campus-img" src="/mainCampus.jpg" alt="" srcset="">
    </div>
  </div>
  </div>
  
    <FAQ />
  
</template>

<style scoped>
.section {
  height: 80vh !important;
}

.campus-img {
  max-width: 630px;
  border-radius: 50px !important;
}

.rm-section {
  background-color: white !important;
}

</style>
