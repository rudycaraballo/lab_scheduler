<script setup>
import DescriptionCard from "@/components/DescriptionCard.vue";
import axios from "axios";
import { ref, onBeforeMount} from "vue";
import { API_ENDPOINT } from "../../global";

let startTime;
let endTime;
let date;
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

function convertTo12hr(time24) {
    const [hours, minutes] = time24.split(':').map(Number);
    const period = hours >= 12 ? 'PM' : 'AM';
    const hours12 = hours % 12 || 12;  
    const time12 = `${hours12}:${minutes.toString().padStart(2, '0')} ${period}`;
    
    return time12;
}

let rooms = ref([]);
let pageContent = ref([]);
let pages = ref([]);


let currentPage = ref(0)
let currentDay = ref(null)

let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); 
let yyyy = today.getFullYear();

// Format the current date as "YYYY-MM-DD"
currentDay.value = yyyy + '-' + mm + '-' + dd;

function isValidTimes(time1, time2) {
  const dateTime1 = new Date(`October 13, 2014 ${time1}`);
  const dateTime2 = new Date(`October 13, 2014 ${time2}`);

  if (dateTime1 >= dateTime2) {
      return false;
  } else {
    return true;
  }
}

const filterTime = async () => {
  if (!isValidTimes(startTime, endTime) && startTime && endTime) {
    alert("Invalid start and end times");
    return;
  }
  
  let bookingFilter = {
    bookingStart: `${startTime}:00`,
    bookingEnd: `${endTime}:00`,
    dayBooked: date
  }

  
  try {
    
    const filterResponse = await axios.get(`${API_ENDPOINT}/filtered-bookings`, {params: bookingFilter})

    //any rooms are filtered?
    if(filterResponse.data.length >= 1) {

      const allRoomsResponse = await axios.get(`${API_ENDPOINT}/available-rooms`);
      let allRooms = allRoomsResponse.data
      let excludedRooms = [];

      for(var room in filterResponse.data) {
        let roomID = filterResponse.data[room].RoomID;
        excludedRooms.push(roomID)
      }

      let filteredRooms = allRooms.filter(room => !excludedRooms.includes(room.RoomID));
      rooms.value = [...filteredRooms]
       generatePages()  
       //generate all rooms if not  
    } else {
      const response = await axios.get(`${API_ENDPOINT}/available-rooms`);
      rooms.value = response.data;
      generatePages()
    }
  } catch (err) {
    console.log(err);
  }
}

const changePage = (page) => {
  currentPage.value = (page - 1)

    //Remounts child components
    rooms.value.forEach(item => {
          item.id = Math.random(); // Add a temporary unique key
        });

}


const generatePages = () => {
  let filler = []
  pageContent.value = []
  pages.value =[]

  for(const [i, value] of rooms.value.entries()) {
  filler.push(value)
  if( (i+1) % 10 === 0) {
    pageContent.value.push(filler);
    pages.value.push(pageContent.value.length)
    filler = []
  }
}


if(filler.length > 0 ) {
  pageContent.value.push(filler)
  pages.value.push(pageContent.value.length)
}
  currentPage.value = 0
  rooms.value.forEach(item => {
        item.id = Math.random(); // Add a temporary unique key
      });
}


onBeforeMount(async () => {
  try {
    const response = await axios.get(`${API_ENDPOINT}/available-rooms`);
    rooms.value = response.data;
    generatePages()
    
  } catch (error) {
    console.error('Error fetching users:', error);
  }
});
</script>

<template>
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

    <div class="col-lg-2">
      <label for="date" class="form-label">Date:</label>
      <input v-model="date" type="date" class="form-control" id="date" placeholder="" value="" :min=currentDay required>
      <div class="invalid-feedback">
        Valid first name is required.
      </div>
    </div>

    <div class="col-lg-2">
      <br/>
      <button @click="filterTime" id="" class="btn btn-primary btn-sm " type="submit">Search</button>
    </div>

</div>

</div>

  <div class="container">
    <DescriptionCard v-for="room in pageContent[currentPage]" :key="room.id" :room="room"/>

        <nav class="">
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <div v-for="page in pages" :key="page"> 
            <li :key="page" class="page-item"><a @click="changePage(page)" class="page-link" href="#">{{ page}}</a></li>
          </div>
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>

  </div>
</template>

<style scoped>
.time {
  height: 30px;
  width: 150px
}
</style>
