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

let startTime;
let endTime;

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
  console.log(date);
  console.log(endTime);
  console.log(startTime);
  router.push(
    {name: 'checkout', 
    params: {
      rmNumCheckout: props.rmNum, 
      buildingNameCheckout: props.buildingName,
      capacity: capacity.value,
      date: date.value,
      startTime: startTime,
      endTime: endTime
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

    <!-- <div class="col-lg-3">

      <label for="startTime" class="form-label">Start Time</label>
      <input v-model="startTime" type="time" class="form-control" id="time" placeholder="" value="" step="900" required>
      <div class="invalid-feedback">
        Valid first name is required.
      </div>

    </div> -->
    <div class="col-lg-2">
      <label for="time">Start Time:</label>
      <br/>
      <select v-model="startTime" class="time" name="time" id="startTime">
        <option value="5:00">5:00 AM</option>
        <option value="5:15">5:15 AM</option>
        <option value="5:30">5:30 AM</option>
        <option value="5:45">5:45 AM</option>
        
        <option value="6:00">6:00 AM</option>
        <option value="6:15">6:15 AM</option>
        <option value="6:30">6:30 AM</option>
        <option value="6:45">6:45 AM</option>
        
        <option value="7:00">7:00 AM</option>
        <option value="7:15">7:15 AM</option>
        <option value="7:30">7:30 AM</option>
        <option value="7:45">7:45 AM</option>
        
        <option value="8:00 AM">8:00 AM</option>
        <option value="8:15 AM">8:15 AM</option>
        <option value="8:30 AM">8:30 AM</option>
        <option value="8:45 AM">8:45 AM</option>
        
        <option value="9:00">9:00 AM</option>
        <option value="9:15">9:15 AM</option>
        <option value="9:30">9:30 AM</option>
        <option value="9:45">9:45 AM</option>
 
            <option value="10:00">10:00 AM</option>
            <option value="10:15">10:15 AM</option>
            <option value="10:30">10:30 AM</option>
            <option value="10:45">10:45 AM</option>
            
            <option value="11:00">11:00 AM</option>
            <option value="11:15">11:15 AM</option>
            <option value="11:30">11:30 AM</option>
            <option value="11:45">11:45 AM</option>
            
            <option value="12:00">12:00 PM</option>
            <option value="12:15">12:15 PM</option>
            <option value="12:30">12:30 PM</option>
            <option value="12:45">12:45 PM</option>
            
            <option value="1:00">1:00 PM</option>
            <option value="1:15">1:15 PM</option>
            <option value="1:30">1:30 PM</option>
            <option value="1:45">1:45 PM</option>
            
            <option value="2:00">2:00 PM</option>
            <option value="2:15">2:15 PM</option>
            <option value="2:30">2:30 PM</option>
            <option value="2:45">2:45 PM</option>
            
            <option value="3:00">3:00 PM</option>
            <option value="3:15">3:15 PM</option>
            <option value="3:30">3:30 PM</option>
            <option value="3:45">3:45 PM</option>
            
          <option value="4:00">4:00 PM</option>
          <option value="4:15">4:15 PM</option>
          <option value="4:30 PM">4:30 PM</option>
          <option value="4:45 PM">4:45 PM</option>
          
          <option value="5:00">5:00 PM</option>
          <option value="5:15">5:15 PM</option>
          <option value="5:30">5:30 PM</option>
          <option value="5:45">5:45 PM</option>
          
          <option value="6:00">6:00 PM</option>
          <option value="6:15">6:15 PM</option>
          <option value="6:30">6:30 PM</option>
          <option value="6:45">6:45 PM</option>
          
          <option value="7:00">7:00 PM</option>
          <option value="7:15">7:15 PM</option>
          <option value="7:30">7:30 PM</option>
          <option value="7:45">7:45 PM</option>
          
          <option value="8:00">8:00 PM</option>
          <option value="8:15">8:15 PM</option>
          <option value="8:30">8:30 PM</option>
          <option value="8:45">8:45 PM</option>
          
          <option value="9:00">9:00 PM</option>
          <option value="9:15">9:15 PM</option>
          <option value="9:30">9:30 PM</option>
          <option value="9:45">9:45 PM</option>
 
          <option value="10:00">10:00 PM</option>
          <option value="10:15">10:15 PM</option>
          <option value="10:30">10:30 PM</option>
          <option value="10:45">10:45 PM</option>
          
          <option value="11:00">11:00 PM</option>
          <option value="11:15">11:15 PM</option>
          <option value="11:30">11:30 PM</option>
          <option value="11:45">11:45 PM</option>
          </select>

      </div>

    <div class="col-lg-2">
      <label for="time">End Time:</label>
      <br/>
      <select v-model="endTime" class="time" name="time" id="endTime">
        <option value="5:00">5:00 AM</option>
        <option value="5:15">5:15 AM</option>
        <option value="5:30">5:30 AM</option>
        <option value="5:45">5:45 AM</option>
        
        <option value="6:00">6:00 AM</option>
        <option value="6:15">6:15 AM</option>
        <option value="6:30">6:30 AM</option>
        <option value="6:45">6:45 AM</option>
        
        <option value="7:00">7:00 AM</option>
        <option value="7:15">7:15 AM</option>
        <option value="7:30">7:30 AM</option>
        <option value="7:45">7:45 AM</option>
        
        <option value="8:00 AM">8:00 AM</option>
        <option value="8:15 AM">8:15 AM</option>
        <option value="8:30 AM">8:30 AM</option>
        <option value="8:45 AM">8:45 AM</option>
        
        <option value="9:00">9:00 AM</option>
        <option value="9:15">9:15 AM</option>
        <option value="9:30">9:30 AM</option>
        <option value="9:45">9:45 AM</option>
 
            <option value="10:00">10:00 AM</option>
            <option value="10:15">10:15 AM</option>
            <option value="10:30">10:30 AM</option>
            <option value="10:45">10:45 AM</option>
            
            <option value="11:00">11:00 AM</option>
            <option value="11:15">11:15 AM</option>
            <option value="11:30">11:30 AM</option>
            <option value="11:45">11:45 AM</option>
            
            <option value="12:00">12:00 PM</option>
            <option value="12:15">12:15 PM</option>
            <option value="12:30">12:30 PM</option>
            <option value="12:45">12:45 PM</option>
            
            <option value="1:00">1:00 PM</option>
            <option value="1:15">1:15 PM</option>
            <option value="1:30">1:30 PM</option>
            <option value="1:45">1:45 PM</option>
            
            <option value="2:00">2:00 PM</option>
            <option value="2:15">2:15 PM</option>
            <option value="2:30">2:30 PM</option>
            <option value="2:45">2:45 PM</option>
            
            <option value="3:00">3:00 PM</option>
            <option value="3:15">3:15 PM</option>
            <option value="3:30">3:30 PM</option>
            <option value="3:45">3:45 PM</option>
            
          <option value="4:00">4:00 PM</option>
          <option value="4:15">4:15 PM</option>
          <option value="4:30 PM">4:30 PM</option>
          <option value="4:45 PM">4:45 PM</option>
          
          <option value="5:00">5:00 PM</option>
          <option value="5:15">5:15 PM</option>
          <option value="5:30">5:30 PM</option>
          <option value="5:45">5:45 PM</option>
          
          <option value="6:00">6:00 PM</option>
          <option value="6:15">6:15 PM</option>
          <option value="6:30">6:30 PM</option>
          <option value="6:45">6:45 PM</option>
          
          <option value="7:00">7:00 PM</option>
          <option value="7:15">7:15 PM</option>
          <option value="7:30">7:30 PM</option>
          <option value="7:45">7:45 PM</option>
          
          <option value="8:00">8:00 PM</option>
          <option value="8:15">8:15 PM</option>
          <option value="8:30">8:30 PM</option>
          <option value="8:45">8:45 PM</option>
          
          <option value="9:00">9:00 PM</option>
          <option value="9:15">9:15 PM</option>
          <option value="9:30">9:30 PM</option>
          <option value="9:45">9:45 PM</option>
 
          <option value="10:00">10:00 PM</option>
          <option value="10:15">10:15 PM</option>
          <option value="10:30">10:30 PM</option>
          <option value="10:45">10:45 PM</option>
          
          <option value="11:00">11:00 PM</option>
          <option value="11:15">11:15 PM</option>
          <option value="11:30">11:30 PM</option>
          <option value="11:45">11:45 PM</option>
          </select>

      </div>
    
    <!-- <div class="col-lg-3">

    <label for="endTime" class="form-label">End Time</label>
    <input v-model="endTime" type="time" class="form-control" id="time" placeholder="" value="" required>
    <div class="invalid-feedback">
      Valid first name is required.
    </div>

    </div> -->
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

.time {
  height: 30px;
  width: 100px
}
</style>