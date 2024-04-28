<script setup>
import RoomCard from "../components/HomeCard.vue";
import Pagination from "@/components/Pagination.vue";
import DescriptionCard from "@/components/DescriptionCard.vue";
import BookingSearch from "@/components/BookingSearch.vue";
import axios from "axios";
import { ref, onBeforeMount} from "vue";

let startTime;
let endTime;
let date;

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
 
    if(filterResponse.data.length >= 1) {

      const allRoomsResponse = await axios.get('http://localhost:3000/available-rooms');
      let allRooms = allRoomsResponse.data
      let excludedRooms = [];

      console.log(typeof filterResponse.data);
      for(var room in filterResponse.data) {

        let roomID = filterResponse.data[room].RoomID;
        excludedRooms.push(roomID)
      }

      console.log(allRooms);

      let filteredRooms = allRooms.filter(room => !excludedRooms.includes(room.RoomID));
      rooms.value = [...filteredRooms]

      //Remounts child components
      rooms.value.forEach(item => {
          item.id = Math.random(); // Add a temporary unique key
        });
     
    }
  } catch (err) {
    console.log(err);
  }
}


let rooms = ref([]);
//Loading all rooms before mounting
onBeforeMount(async () => {
  try {
    const response = await axios.get('http://localhost:3000/available-rooms');
    rooms.value = response.data;

    console.log(rooms);
    
  } catch (error) {
    console.error('Error fetching users:', error);
  }
});


</script>

<template>
      <div id="booking-search" class="container booking-srch">

<div id="booking-search-row" class="row g-4" style="margin-bottom: 50px;">

    <div class="col-lg-2">

      <label for="startTime" class="form-label">Start Time</label>
      <input v-model="startTime" type="time" class="form-control" id="time" placeholder="" value="" step="900" required>
      <div class="invalid-feedback">
        Valid first name is required.
      </div>

    </div>
    <div class="col-lg-2">

    <label for="endTime" class="form-label">End Time</label>
    <input v-model="endTime" type="time" class="form-control" id="time" placeholder="" value="" required>
    <div class="invalid-feedback">
      Valid first name is required.
    </div>

    </div>
    <div class="col-lg-2">
      <label for="date" class="form-label">Date</label>
      <input v-model="date" type="date" class="form-control" id="date" placeholder="" value="" required>
      <div class="invalid-feedback">
        Valid first name is required.
      </div>
      
    </div>
    <div class="col-lg-2">
      <button @click="filterTime" id="" class="btn btn-primary btn-sm " type="submit">Search</button>
    </div>

</div>

</div>

  <div class="container">

    <DescriptionCard v-for="room in rooms" :key="room.id" :room="room"/>

    <Pagination />
  </div>
</template>
