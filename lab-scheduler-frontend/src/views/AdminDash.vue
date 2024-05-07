<script setup>
import axios from "axios";
import { ref, onBeforeMount} from "vue";

import BookingLog from "@/components/BookingLog.vue";

const bookingHeaders = ["Booking#", "User", "UserID", "Time", "Date", "Location"]

let bookings = ref([])
//Loading all rooms before mounting
onBeforeMount(async () => {
  try {
    const response = await axios.get('http://localhost:3000/monthly-report');
    bookings.value = response.data;
    console.log(bookings.value);

  } catch (error) {
    console.error('Error getting monthly report:', error);
  }
});
</script>

<template>
     <div class="container container-fluid">
      <div class="row">
        <nav class="col-md-2 d-none d-md-block bg-light sidebar">
          <div class="sidebar-sticky">
            <ul class="nav flex-column">
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  <span data-feather="home"></span>
                  Booking Logs<span class="sr-only"></span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span data-feather="file"></span>
                  Edit Booking
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span data-feather="shopping-cart"></span>
                  Delete Booking
                </a>
              </li>
            </ul>  
          </div>
        </nav>

        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">


          <h2>Booking Logs</h2>
          <div class="table-responsive">
            <table class="table table-striped table-sm">
              <thead>
                <tr>
                  <th v-for="header in bookingHeaders">{{header}}</th>
                </tr>
              </thead>
              <tbody>
                <BookingLog v-for="booking in bookings" 
                :bookingNum=booking.BookingID 
                :userName=booking.FirstName 
                :startTime=booking.StartTimeBooked
                :endTime=booking.EndTimeBooked 
                :date=booking.DayBooked
                :building=booking.BuildingName 
                :rmNum=booking.RoomNum 
                :userId = booking.UserID
                />
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>

</template>