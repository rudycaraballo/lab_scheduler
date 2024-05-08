<script setup>
import { ref } from 'vue';

let isChangeTime = ref(false)
let isChangeRoom = ref(false)
</script>
<template >
    <div class="col-md-4 col-lg-5">
    <form @submit.stop.prevent="submit" class="needs-validation" novalidate>
          <div class="row g-3">
    

            <div class="col-12">
              <label for="altEmail" class="form-label">Booking ID</label>
              <input   type="email" class="form-control" id="email" placeholder="" required>
              <div class="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>


        
          </div>

        <hr class="my-4">

        <button class=" btn btn-primary btn-lg" type="submit">Delete This Booking</button>
        </form>
    </div>
</template>