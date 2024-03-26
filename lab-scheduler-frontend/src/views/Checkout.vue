<script setup>
import CheckoutCard from "@/components/CheckoutCard.vue";
</script>

<template>
    <div class="container" style="max-width: 900px;">
      <main>
    <div class="py-5 text-center">
     
      <h2>Checkout Form</h2>
      <p class="lead">lorem ipsum</p>
    </div>

    <div class="row g-5">
      <div class="col-md-7 col-lg-5 order-md-last">
        <CheckoutCard />
      </div>
      
      <div class="col-md-5 col-lg-6">
        <form class="needs-validation" novalidate>
          <div class="row g-3">
            <div class="col-sm-6">
              <label for="firstName" class="form-label">First name</label>
              <input type="text" class="form-control" id="firstName" placeholder="" value="" required>
              <div class="invalid-feedback">
                Valid first name is required.
              </div>
            </div>

            <div class="col-sm-6">
              <label for="lastName" class="form-label">Last name</label>
              <input type="text" class="form-control" id="lastName" placeholder="" value="" required>
              <div class="invalid-feedback">
                Valid last name is required.
              </div>
            </div>

            <div class="col-12">
              <label for="email" class="form-label">SUNY OW Email </label>
              <input type="email" class="form-control" id="email" placeholder="you@example.com" required>
              <div class="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>

            <div class="col-12">
              <label for="email" class="form-label">Alternate Email <span class="text-body-secondary">(Optional)</span></label>
              <input type="email" class="form-control" id="email" placeholder="you@example.com">
              <div class="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>

            <div class="col-12">
              <label for="email" class="form-label">Number of expected attendants<span class="text-body-secondary">(Optional)</span></label>
              <input type="email" class="form-control" id="email" placeholder="you@example.com">
              <div class="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>

            <div class="col-12">
              <label for="email" class="form-label">Subject/Number/Section<span class="text-body-secondary">(Optional)</span></label>
              <input type="email" class="form-control" id="email" placeholder="you@example.com">
              <div class="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>

         
        
          </div>

        <hr class="my-4">

        <button class="w-100 btn btn-primary btn-lg" type="submit"><RouterLink to="/room-desc" class="nav-link active">Confirm Booking</RouterLink></button>
        </form>
      </div>
    </div>
  </main>
    </div>
  </template>
  