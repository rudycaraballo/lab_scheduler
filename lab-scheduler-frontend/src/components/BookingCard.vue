<script setup>
import {ref, defineProps, onBeforeMount, onMounted} from 'vue'
import { useRouter } from 'vue-router';
import axios from 'axios';
//TODO: Only checkout card should have the image passed since it will do an empty check 
const props = defineProps(['rmNum', "buildingName"])

const imageUrl = ref(`/src/assets/images/rm${props.rmNum}.jpg`);
const route = `/checkout/${props.rmNum}/${props.buildingName}`


const router = useRouter();

let capacity = ref(null);
let date = ref(null);
let startTime = ref(null);
let endTime = ref(null);

onBeforeMount(async () => {
  try {
    const response = await axios.get('http://localhost:3000/room-information', {params: {roomNumber: props.rmNum}});
    localStorage.setItem('roomId', response.data[0].RoomID);
    localStorage.setItem('buildingId', response.data[0].BuildingID);
    capacity.value = response.data[0].Capacity
    console.log(capacity);
    
  } catch (error) {
    console.error('Error fetching users:', error);
  }

});

const goToBooking = async () => {
  router.push(
    {name: 'checkout', 
    params: {
      rmNumCheckout: props.rmNum, 
      buildingNameCheckout: props.buildingName,
      capacity: capacity.value,
      date: date.value,
      startTime: startTime.value,
      endTime: endTime.value
      }
    })
}
</script>

<template>  
     <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">

         <div class="col-auto d-none d-lg-block">
          <img class="rm-img" :src=imageUrl></img>
         </div>

       <div class="col p-4 d-flex flex-column position-static">
         <strong class="d-inline-block mb-2 text-primary-emphasis">{{ buildingName }}</strong>
         <h3 class="mb-0">Room #{{ rmNum }}</h3>
         <div class="mb-1 text-body-secondary">{{date}}</div>
         <p class="card-text mb-auto">Capacity: {{ capacity }}</p>
         <div id="booking-search" class="container booking-srch">

<div id="booking-search-row" class="row g-4" style="margin-bottom: 50px;">

    <div class="col-lg-3">

      <label for="startTime" class="form-label">Start Time</label>
      <input v-model="startTime" type="time" class="form-control" id="time" placeholder="" value="" step="900" required>
      <div class="invalid-feedback">
        Valid first name is required.
      </div>

    </div>
    <div class="col-lg-3">

    <label for="endTime" class="form-label">End Time</label>
    <input v-model="endTime" type="time" class="form-control" id="time" placeholder="" value="" required>
    <div class="invalid-feedback">
      Valid first name is required.
    </div>

    </div>
    <div class="col-lg-3">
      <label for="date" class="form-label">Date</label>
      <input v-model="date" type="date" class="form-control" id="date" placeholder="" value="" required>
      <div class="invalid-feedback">
        Valid first name is required.
      </div>
      
    </div>

</div>

</div>

         <button @click="goToBooking" type="button" class="btn btn-primary btn-sm col-md-2">Book This Room</button>
       </div>

     </div>

</template>

<style scoped>
.rm-img {
  max-width: 300px;
  padding: 1.5em;
}
</style>