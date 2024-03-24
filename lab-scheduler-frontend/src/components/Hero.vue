
<script setup>
import router from "../router";

let goToBooking = () => router.push('/rooms')
</script>

<template>
     <div class="px-4 py-5 my-4 text-center">
    <h1 class="display-5 fw-bold text-body-emphasis">Booking with Ease</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco l.</p>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button @click="goToBooking" type="button"  class="btn btn-primary btn-lg px-4">Book a Room</button>
      </div>
    </div>
  </div>
</template>

