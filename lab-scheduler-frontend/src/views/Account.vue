<script setup>
import AccountBookingCard from "@/components/AccountBookingCard.vue"
import {jwtDecode} from 'jwt-decode';
import { ref, onBeforeMount } from 'vue';
import axios from "axios";
import { API_ENDPOINT } from "../../global";

const token = localStorage.getItem('token');
let user = jwtDecode(token);
let userBookings = ref([]);

let fName = user.fName;


onBeforeMount(async () => {
  try {
    const response = await axios.get(`${API_ENDPOINT}/account-info`, {params:{userId: user.userId}});
    userBookings.value = response.data;

  } catch (error) {
    console.error('Error fetching users:', error);
  }
})

</script>

<template>
    <div class="container">
        <div class="title text-center">
            <h1>Hi, {{ fName }}</h1>
            </div>
            <div class="text-center" v-if="userBookings.length === 0">
                <h2>You have no bookings </h2>
            </div>
    
            <AccountBookingCard v-else v-for="booking in userBookings" :key="booking.id" 
            :dayBooked="booking.DayBooked"
            :endTimeBook="booking.EndTimeBooked"
            :startTimeBooked="booking.StartTimeBooked"
            :bookingId = "booking.BookingID"
            :roomNum = "booking.RoomNum"
            :capacity = "booking.Capacity"
            />
            
    </div>
  </template>


<style scoped>
.title {
  margin-bottom: 30px;
}
</style>
  