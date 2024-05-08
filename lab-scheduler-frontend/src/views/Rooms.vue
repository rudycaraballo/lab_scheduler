<script setup>
import DescriptionCard from "@/components/DescriptionCard.vue";
import axios from "axios";
import { ref, onBeforeMount} from "vue";

let startTime;
let endTime;
let date;

let rooms = ref([]);
let pageContent = ref([]);
let pages = ref([]);


let currentPage = ref(0)
let currentDay = ref(null)

let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
let yyyy = today.getFullYear();

// Format the current date as "YYYY-MM-DD"
currentDay.value = yyyy + '-' + mm + '-' + dd;

function isValidTimes(time1, time2) {
  // Create Date objects for each time using generic date
  const dateTime1 = new Date(`October 13, 2014 ${time1}`);
  const dateTime2 = new Date(`October 13, 2014 ${time2}`);

  if (dateTime1 >= dateTime2) {
      return false;
  } else {
    return true;
  }
}

const filterTime = async () => {
  //TODO: check that start, end and date are all filled
  if (!isValidTimes(startTime, endTime)) {
    alert("Invalid start and end times");
    return;
  }
  
  let bookingFilter = {
    bookingStart: `${startTime}:00`,
    bookingEnd: `${endTime}:00`,
    dayBooked: date
  }
  //19:28
  //19:28
  //2024-04-02
  
  
  try {
    
    //TODO: make this one axios call and just have it return a joined table for all rooms that don't include anything in the booking table + rooms table 
    const filterResponse = await axios.get('http://localhost:3000/filtered-bookings', {params: bookingFilter})
    console.log("im here");
    console.log(filterResponse.data.length);
    //any rooms are filtered?
    if(filterResponse.data.length >= 1) {

      const allRoomsResponse = await axios.get('http://localhost:3000/available-rooms');
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
      const response = await axios.get('http://localhost:3000/available-rooms');
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
  console.log("im getting called");
  let filler = []
  pageContent.value = []
  pages.value =[]

  for(const [i, value] of rooms.value.entries()) {
    console.log(value.RoomNum);
  filler.push(value)

  if( (i+1) % 10 === 0) {
    pageContent.value.push(filler);
    pages.value.push(pageContent.value.length)
    filler = []
  }
}
console.log(pageContent.value);

if(filler.length > 0 ) {
  pageContent.value.push(filler)
  pages.value.push(pageContent.value.length)
}
  console.log(pageContent.value);
  currentPage.value = 0
  rooms.value.forEach(item => {
        item.id = Math.random(); // Add a temporary unique key
      });
}

//Loading all rooms before mounting
onBeforeMount(async () => {
  try {
    const response = await axios.get('http://localhost:3000/available-rooms');
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

    <!-- <div class="col-lg-2">

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
    <!-- <div class="col-lg-2">

    <label for="endTime" class="form-label">End Time</label>
    <input v-model="endTime" type="time" class="form-control" id="time" placeholder="" value="" required>
    <div class="invalid-feedback">
      Valid first name is required.
    </div>

    </div> -->


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
<!-- 
    <DescriptionCard v-for="room in rooms" :key="room.id" :room="room"/> -->
    <DescriptionCard v-for="room in pageContent[currentPage]" :key="room.id" :room="room"/>

        <nav class="">
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <div v-for="page in pages" :key="page"> <!-- Loop 3 times -->
            <li :key="page" class="page-item"><a @click="changePage(page)" class="page-link" href="#">{{ page}}</a></li>
          </div>
          <!-- <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li> -->
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
