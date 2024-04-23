<script setup>
import {ref, defineProps} from 'vue'
//TODO: load from DB instead of having it passed from room page
//TODO: Only checkout card should have the image passed since it will do an empty check 
const props = defineProps(['rmNum', "buildingName"])

const imageUrl = ref(`/src/assets/images/rm${props.rmNum}.jpg`);
//TODO: add time to this endpoint

const route = `/checkout/${props.rmNum}/${props.buildingName}`
console.log(route);

</script>

<template>
  //Todo: Add booking inputs such as time and date same as the room search page
   
     <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
         <div class="col-auto d-none d-lg-block">
          <img class="rm-img" :src=imageUrl></img>
         </div>
       <div class="col p-4 d-flex flex-column position-static">
         <strong class="d-inline-block mb-2 text-primary-emphasis">{{ buildingName }}</strong>
         <h3 class="mb-0">Room #{{ rmNum }}</h3>
         <div class="mb-1 text-body-secondary">Nov 12</div>
         <p class="card-text mb-auto">This is example text that will contain a short description of the room such aas capacity, technology in the room, and any unique room features.</p>
         <button type="button" class="btn btn-primary btn-sm col-md-2"><RouterLink :to=route class="nav-link active">Book This Room</RouterLink></button>
       </div>
     </div>

</template>

<style scoped>
.rm-img {
  max-width: 300px;
  padding: 1.5em;
}
</style>