<script setup>
import Modal from "./Modal.vue"
import { defineProps, ref } from "vue";

const props = defineProps(['dayBooked', "endTimeBook","startTimeBooked", "bookingId", "roomNum", "capacity" ])

let roomNumFixed = props.roomNum < 1000 ? ("0" + props.roomNum) : props.roomNum;
const imageUrl = ref(`/src/assets/images/rm${roomNumFixed}.jpg`);

const editBooking = async() => {

}

const deleteBooking = async() => {

}

</script>

<template>

    <div class="row mb-2 row-wrapper">
   <div class="col-md-12">
     <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
       <div class="col p-4 d-flex flex-column position-static">
         <strong class="d-inline-block mb-2 text-primary-emphasis">NAB</strong>
         <h3 class="mb-0">Room #FFF</h3>
         <div class="mb-1 text-body-secondary">{{dayBooked}}</div>
         <p class="card-text mb-auto">Start time: {{ startTimeBooked }}</p>
         <p class="card-text mb-auto">End time: {{ endTimeBook }}</p>
         <button type="button"  class="btn btn-primary btn-sm col-md-2"><RouterLink to="/" class="nav-link active">Edit Booking</RouterLink></button>
         <!-- TODO trigger modal if they want to delete the booking and then allow a delete once they confirm -->
         
         <Modal />
       </div>
       <div class="col-auto d-none d-lg-block rm-wrapper">
        <img class="rm-img" :src=imageUrl></img>
       </div>
     </div>
   </div>
 </div>

</template>

<style scoped>
.rm-wrapper {
  height: 300px;
}

.rm-img {
  width: 100%;
  height: 100%;
}
.row-wrapper {
  transition: transform 0.3s ease !important; /* Smooth transition for transform property */
}
.row-wrapper:hover {
  opacity: 2 !important;
  transform: scale(1.075);

}

</style>