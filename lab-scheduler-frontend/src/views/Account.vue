<script setup>
import AccountBookingCard from "@/components/AccountBookingCard.vue"
</script>

<template>
    <div class="container">
        <div class="text-center">
            <h1>Hi username</h1>
            <h2>You have no bookings </h2>
            
            <h3>or</h3>
            <h2>Your Current Bookings</h2>
        </div>
        <AccountBookingCard />
        <router-view />
    </div>
  </template>
  