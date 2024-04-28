<script setup>
import AccountBookingCard from "@/components/AccountBookingCard.vue"

import {jwtDecode} from 'jwt-decode';
import { ref, defineProps, onBeforeMount } from 'vue';
import axios from "axios";



const token = localStorage.getItem('token');
let user = jwtDecode(token);

let fName = user.fName;
console.log(user.username);
console.log(user.fName);

//TODO: use username to check if they have any bookings and reactivly alter this page from it

</script>

<template>
    <div class="container">
        <div class="text-center">
            <h1>Hi {{ fName }}</h1>
            <h2>You have no bookings </h2>
            
            <h3>or</h3>

            <h2>Your Current Bookings</h2>
        </div>
        <AccountBookingCard />
        <router-view />
    </div>
  </template>
  