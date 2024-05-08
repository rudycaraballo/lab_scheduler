<script setup>
import { ref } from 'vue';

let isChangeTime = ref(false)
let isChangeRoom = ref(false)

let bookingForm = {
  userId:"",
  bookingId: "",
  newStartTime:"",
  newEndTime: "",
  newRoom: "",
}

const changeBooking = () => {
  console.log(bookingForm);
}

</script>
<template >
    <div class="col-md-4 col-lg-5">
    <form @submit.stop.prevent="submit" class="needs-validation" novalidate>
          <div class="row g-3">
    
            <div class="col-12">
              <label for="owEmail" class="form-label">UserID </label>
              <input  type="email" class="form-control" id="email" placeholder="" required>
              <div class="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>

            <div class="col-12">
              <label for="altEmail" class="form-label">Booking ID</label>
              <input v-model="bookingForm.bookingId"   type="email" class="form-control" id="email" placeholder="" required>
              <div class="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>

            <div class="d-block my-3">
              <div class="custom-control custom-checkbox">
                <input v-model="isChangeTime" type="checkbox" class="custom-control-input" id="same-address">
                <label class="custom-control-label" for="same-address">Does user need to change the time?</label>
                </div>
                </div>

                <div class="d-block my-3">
              <div class="custom-control custom-checkbox">
                <input v-model="isChangeRoom" type="checkbox" class="custom-control-input" id="same-address">
                <label class="custom-control-label" for="same-address">Does User Want to Change Their Room?</label>
                </div>
                </div>

                <div class="d-block my-3">
              <div class="custom-control custom-checkbox">
                <input v-model="isChangeRoom" type="checkbox" class="custom-control-input" id="same-address">
                <label class="custom-control-label" for="same-address">Does User Want to Change The Date Of Event?</label>
                </div>
                </div>

            <div v-if="isChangeTime">
              <div class="col-6">
              <label for="attendants" class="form-label">Change Start Time</label>
              <input v-model="bookingForm.newStartTime"  type="number" class="form-control" placeholder="" required>
              <div class="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>

            <div class="col-6">
              <label for="attendants" class="form-label">Change End Time</label>
              <input v-model="bookingForm.newEndTime"  type="number" class="form-control" placeholder="" required>
              <div class="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>
            </div>
            
            <div v-if="isChangeRoom">
              <div class="col-6">
                  <label for="section" class="form-label">New Room Number</label>
                      <input v-model="bookingForm.newRoom" type="text" class="form-control" placeholder="" required>
                      <div class="invalid-feedback">
                           Please enter a valid email address for shipping updates.
                        </div>
                </div>
            </div>
        
          </div>

        <hr class="my-4">

        <button @click="editBooking" class=" btn btn-primary btn-lg" type="submit">Edit This Booking</button>
        </form>
    </div>
</template>