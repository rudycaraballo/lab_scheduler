
<script setup>
import router from "../router";

let goToLogin = () => router.push('/login')
let goToBooking = () => router.push('/booking')
</script>

<template>
     <div class="px-4 py-5 my-4 text-center">
    <!-- <img class="d-block mx-auto mb-4" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"> -->
    <h1 class="display-5 fw-bold text-body-emphasis">Booking with Ease</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco l.</p>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button @click="goToLogin"  type="button" class="btn btn-primary btn-lg px-4 gap-3">Log In</button>
        <button @click="goToBooking" type="button"  class="btn btn-outline-secondary btn-lg px-4">Booking</button>
      </div>
    </div>
  </div>
</template>

