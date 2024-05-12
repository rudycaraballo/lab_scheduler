<script setup>
import Modal from "./Modal.vue"
import { defineProps, ref } from "vue";
import { useRouter } from 'vue-router';
import { API_ENDPOINT } from "../../global";
import axios from "axios";

const props = defineProps(['dayBooked', "endTimeBook","startTimeBooked", "bookingId", "roomNum", "capacity" ])

const router = useRouter();

let roomNumFixed = props.roomNum < 1000 ? ("0" + props.roomNum) : props.roomNum;
const imageUrl = ref(`/rm${roomNumFixed}.jpg`);


const deleteBooking = async() => {
  let deleteForm = {
    "bookingId": props.bookingId 
  }
  try {
    const response = await axios.post(`${API_ENDPOINT}/delete-booking`, deleteForm)
    if(response.status === 201) {
      location.reload()
    }
  } catch (error) {
    alert(error)
  }
}

</script>

<template>

    <div class="row mb-2 row-wrapper">
   <div class="col-md-12">
     <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
       <div class="col p-4 d-flex flex-column position-static">
         <strong class="d-inline-block mb-2 text-primary-emphasis">NAB</strong>
         <h3 class="mb-0">Room {{ roomNum }}</h3>
         <div class="mb-1 text-body-secondary">{{dayBooked}}</div>
         <p class="card-text mb-auto">Start time: {{ startTimeBooked }}</p>
         <p class="card-text mb-auto">End time: {{ endTimeBook }}</p> 
         
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
          <button @click=deleteBooking type="button" class="btn btn-danger">
            Delete Booking
          </button>
        </div>
      </div>
    </div>
  </div>
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
.edit-btn {
  margin-bottom: 10px;
}
</style>