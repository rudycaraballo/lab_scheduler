<script setup>
import AccountBookingCard from "@/components/AccountBookingCard.vue"

import {jwtDecode} from 'jwt-decode';
import { ref, defineProps, onBeforeMount } from 'vue';
import axios from "axios";

const token = localStorage.getItem('token');
let user = jwtDecode(token);
let userBookings = ref([]);

let fName = user.fName;
console.log(user.username);
console.log(user.fName);

//TODO: use username to check if they have any bookings and reactivly alter this page from it
onBeforeMount(async () => {
  try {
    const response = await axios.get('http://localhost:3000/account-info', {params:{userId: user.userId}});
    userBookings.value = response.data;
    console.log(userBookings.value);
  } catch (error) {
    console.error('Error fetching users:', error);
  }
})

</script>

<template>
    <div class="container">
        <div class="text-center">
            <h1>Hi {{ fName }}</h1>
            </div>
            <div class="text-center" v-if="userBookings.length === 0">
                <h2>You have no bookings </h2>
            </div>
    
            <AccountBookingCard v-else v-for="booking in userBookings" :key="booking.id" 
            :dayBooked="booking.DayBooked"
            :endTimeBook="booking.EndTimeBooked"
            :startTimeBooked="booking.StartTimeBooked"
            :bookingId = "booking.BookingID"
            />
            
            
        <router-view />
    </div>
  </template>
  