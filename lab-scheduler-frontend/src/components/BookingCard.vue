<script setup>
import {ref, defineProps, onBeforeMount, onMounted} from 'vue'
import { useRouter } from 'vue-router';
import axios from 'axios';
import { API_ENDPOINT } from '../../global';

const props = defineProps(['rmNum', "buildingName"])

const roomNumFixed = props.rmNum < 1000 ? ("0" + props.rmNum) : props.rmNum;
const imageUrl = ref(`/rm${roomNumFixed}.jpg`);


const router = useRouter();

const avaialbleTimes= [
  '07:00', '07:15', '07:30', '07:45', '08:00',
  '08:15', '08:30', '08:45', '09:00', '09:15',
  '09:30', '09:45', '10:00', '10:15', '10:30',
  '10:45', '11:00', '11:15', '11:30', '11:45',
  '12:00', '12:15', '12:30', '12:45', '13:00',
  '13:15', '13:30', '13:45', '14:00', '14:15',
  '14:30', '14:45', '15:00', '15:15', '15:30',
  '15:45', '16:00', '16:15', '16:30', '16:45',
  '17:00', '17:15', '17:30', '17:45', '18:00',
  '18:15', '18:30', '18:45', '19:00', '19:15',
  '19:30', '19:45', '20:00', '20:15', '20:30',
  '20:45', '21:00', '21:15', '21:30', '21:45',
  '22:00', '22:15', '22:30', '22:45', '23:00'
]


let capacity = ref(null);
let date = ref(null);
let currentDay = ref(null)

let startTime;
let endTime;

let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); 
let yyyy = today.getFullYear();

currentDay.value = yyyy + '-' + mm + '-' + dd;


onBeforeMount(async () => {
  try {
    const response = await axios.get(`${API_ENDPOINT}/room-information`, {params: {roomNumber: props.rmNum}});
    localStorage.setItem('roomId', response.data[0].RoomID);
    localStorage.setItem('buildingId', response.data[0].BuildingID);
    capacity.value = response.data[0].Capacity
  } catch (error) {
    console.error('Error fetching users:', error);
  }
  
});

function convertTo12hr(time24) {
    const [hours, minutes] = time24.split(':').map(Number);
    const period = hours >= 12 ? 'PM' : 'AM';
    const hours12 = hours % 12 || 12;  
    const time12 = `${hours12}:${minutes.toString().padStart(2, '0')} ${period}`;
    return time12;
}

function isValidTimes(time1, time2) {
  const dateTime1 = new Date(`October 13, 2014 ${time1}`);
  const dateTime2 = new Date(`October 13, 2014 ${time2}`);

  if (dateTime1 >= dateTime2) {
      return false;
  } else {
    return true;
  }
}

const goToBooking = async () => {
  if (!isValidTimes(startTime, endTime)) {
    alert("Your Start Time Is Before Your End Time");
    return;
  }

  if(!startTime || !endTime){
    alert("Your Start or End Time is Empty")
    return;
  }

  if (!date.value) {
    alert("Empty Date Section")
    return;
  }
  
  let bookingFilter = {
    bookingStart: `${startTime}:00`,
    bookingEnd: `${endTime}:00`,
    dayBooked: date.value
  }

  try {
  
    const filterResponse = await axios.get(`${API_ENDPOINT}/filtered-bookings`, {params: bookingFilter})
    
    if(filterResponse.data.length >= 1) {
      let bookingRoomId = parseInt(localStorage.getItem('roomId'))

      for(var room in filterResponse.data) {
        let filteredRoomId = filterResponse.data[room].RoomID;
      
        if(bookingRoomId === filteredRoomId) {
          alert("There is already a booking at this time, Please pick another time");
          return;
        }
      }    
      }

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
  } catch (err) {
    console.log(err);
  }
}


</script>

<template>  
     <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">

         <div class="col-auto d-none d-lg-block">
          <img class="rm-img" :src=imageUrl></img>
         </div>

       <div class="col p-4 d-flex flex-column position-static">
         <strong class="d-inline-block mb-2 text-primary-emphasis">{{ buildingName }}</strong>
         <h3 class="mb-0">Room #{{ roomNumFixed}}</h3>
         <div class="mb-1 text-body-secondary">{{date}}</div>
         <p class="card-text mb-auto">Capacity: {{ capacity }}</p>
         <div id="booking-search" class="container booking-srch">

<div id="booking-search-row" class="row g-4" style="margin-bottom: 50px;">

    <div class="col-lg-2">
      <label for="time">Start Time:</label>
      <br/>
      <select v-model="startTime" class="time" name="time" id="startTime">
        <option v-for="time in avaialbleTimes" :value=time>{{convertTo12hr(time)}}</option>
          </select>

      </div>

    <div class="col-lg-2">
      <label for="time">End Time:</label>
      <br/>
      <select v-model="endTime" class="time" name="time" id="endTime">
        <option v-for="time in avaialbleTimes" :value=time>{{convertTo12hr(time)}}</option>
          </select>

      </div>
    
    <div class="col-lg-3">
      <label for="date" class="form-label">Date</label>
      <input v-model="date" type="date" class="form-control" id="date" placeholder="" value="" :min=currentDay required>
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