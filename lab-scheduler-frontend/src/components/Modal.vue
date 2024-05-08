<script setup>
import { defineProps } from 'vue';



let test = () => {
  console.log("Your modal confirm has been pressed");
};

const deleteBooking = () => {

}
</script>

<template>
  <!-- Button trigger modal -->
  <button
    type="button"
    class="btn btn-outline-danger btn-sm col-md-2"
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
          Deleting this booking will remove your reservation. There is no
          gaurantee it will still be available at this time. You will have to
          rebook the room again if you wish to secure the same time slot with
          this room.
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button @click="deleteBooking" type="button" class="btn btn-danger">
            Delete Booking
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
