<script setup>
import AccountBookingCard from "@/components/AccountBookingCard.vue"
</script>

<template>
    <div class="container">
        <div class="text-center">
            <h1>You have no bookings </h1>
            <h3>or</h3>
            <h1>Your Current Bookings</h1>
        </div>
        <AccountBookingCard />
        <router-view />
    </div>
  </template>
  