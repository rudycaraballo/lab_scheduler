<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { API_ENDPOINT } from '../../../global';

let bookingId;

const deleteBooking = async() => {
  let deleteForm = {
    "bookingId": bookingId 
  }
  try {
    const response = await axios.post(`${API_ENDPOINT}/delete-booking`, deleteForm)
    if(response.status === 201) {
      alert("You deleted this booking")
      location.reload()
    }
  } catch (error) {
    alert(error)
  }
}
</script>

<template >
    <div class="col-md-4 col-lg-5">
    <form @submit.stop.prevent="submit" class="needs-validation" novalidate>
          <div class="row g-3">
    

            <div class="col-12">
              <label for="altEmail" class="form-label">Booking ID</label>
              <input v-model="bookingId"  type="number" class="form-control" id="email" placeholder="" required>
              <div class="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>


        
          </div>

        <hr class="my-4">
                  <!-- Button trigger modal -->
          <button
            type="button"
            class="btn btn-primary btn-md col-md-6"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Cancel Booking
          </button>

            <!-- Modal -->
            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Are You Sure?</h1>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    Deleting this booking will remove the reservation permanently.
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button @click=deleteBooking type="button" class="btn btn-danger">
                      Delete Booking
                    </button>
                  </div>
                </div>
              </div>
  </div>

        <!-- <button @click=deleteBooking class=" btn btn-primary btn-lg" type="submit">Delete This Booking</button> -->
        </form>
    </div>
</template>