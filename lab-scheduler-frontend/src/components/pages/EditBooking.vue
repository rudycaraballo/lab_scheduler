<script setup>
import { API_ENDPOINT} from '../../../global';
import { ref } from 'vue';
import axios from 'axios';

let isChangeTime = ref(false)
let isChangeRoom = ref(false)
let isChangeDate = ref(false)
let currentDay = ref(null)
let newDate = ref(null)


let bookingForm = {
  bookingId: null,
  newStartTime:"",
  newEndTime: "",
  newRoom: null,
}

let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); 
let yyyy = today.getFullYear();

currentDay.value = yyyy + '-' + mm + '-' + dd;


const avaialbleTimes= [
  '07:00', '07:15', '07:30', '07:45', '08:00',
  '08:15', '08:30', '08:45', '09:00', '09:15',
  '09:30', '09:45', '10:00', '10:15', '10:30',
  '10:45', '11:00', '11:15', '11:30', '11:45',
  '12:00', '12:15', '12:30', '12:45', '13:00',
  '13:15', '13:30', '13:45', '14:00', '14:15',
  '14:30', '14:45', '15:00', '15:15', '15:30',
  '15:45', '16:00', '16:15', '16:30', '16:45',
  '17:00', '17:15', '17:30', '17:45', '18:00',
  '18:15', '18:30', '18:45', '19:00', '19:15',
  '19:30', '19:45', '20:00', '20:15', '20:30',
  '20:45', '21:00', '21:15', '21:30', '21:45',
  '22:00', '22:15', '22:30', '22:45', '23:00'
]

function isValidTimes(time1, time2) {
  const dateTime1 = new Date(`October 13, 2014 ${time1}`);
  const dateTime2 = new Date(`October 13, 2014 ${time2}`);

  if (dateTime1 >= dateTime2) {
      return false;
  } else {
    return true;
  }
}

function convertTo12hr(time24) {
    const [hours, minutes] = time24.split(':').map(Number);
    const period = hours >= 12 ? 'PM' : 'AM';
    const hours12 = hours % 12 || 12;  
    const time12 = `${hours12}:${minutes.toString().padStart(2, '0')} ${period}`;
    return time12;
}


const editBooking = async() => {
  if(!bookingForm.bookingId) {
    alert("Booking or UserID are empty please fill them out")
    return;
  }

  if(bookingForm.newEndTime === "" && bookingForm.newStartTime === "" && !newDate.value && !bookingForm.newRoom) {
    alert("All edit fields are empty")
    return;
  }

  if(bookingForm.newStartTime === "" && bookingForm.newEndTime ==="") {
    alert("Only one time was filled in")
    return;
  }

  if (!isValidTimes(bookingForm.newStartTime, bookingForm.newEndTime)) {
    alert("Your Start Time Is Before Your End Time");
    return;
  }
  
  if(newDate.value) {
    bookingForm.newDate = newDate.value;
  }

  try {
    const response = await axios.post(`${API_ENDPOINT}/edit-booking`, bookingForm)
    if(response.status === 201) {
      alert("You Edited This Booking")
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
              <label for="bookingId" class="form-label">Booking ID</label>
              <input v-model="bookingForm.bookingId"  type="number" class="form-control"  placeholder="" required>
            </div>

            <div class="d-block my-3">
              <div class="custom-control custom-checkbox">
                <input v-model="isChangeTime" type="checkbox" class="custom-control-input" >
                <label class="custom-control-label" for="same-address">Does user need to change the time?</label>
                </div>
              </div>

                <div class="d-block my-3">
              <div class="custom-control custom-checkbox">
                <input v-model="isChangeRoom" type="checkbox" class="custom-control-input">
                <label class="custom-control-label" for="same-address">Does User Want to Change Their Room?</label>
                </div>
                </div>

                <div class="d-block my-3">
              <div class="custom-control custom-checkbox">
                <input v-model="isChangeDate" type="checkbox" class="custom-control-input">
                <label class="custom-control-label" for="same-address">Does User Want to Change The Date Of Event?</label>
                </div>
              </div>

            <div v-if="isChangeTime">
              <div class="col-lg-2">
                <label for="time">Start Time:</label>
                <br/>
                <select v-model="bookingForm.newStartTime" class="time" name="time" id="startTime">
                  <option v-for="time in avaialbleTimes" :value=time>{{convertTo12hr(time)}}</option>
                    </select>
                </div>
            </div>

            <div v-if="isChangeTime" class="col-lg-2">
              <label for="time">End Time:</label>
              <br/>
              <select v-model="bookingForm.newEndTime" class="time" name="time" id="endTime">
                <option v-for="time in avaialbleTimes" :value=time>{{convertTo12hr(time)}}</option>
              </select>
            </div>


            </div>
            
            <div v-if="isChangeRoom">
              <div class="col-6">
                  <label for="section" class="form-label">New Room Number</label>
                      <input v-model="bookingForm.newRoom" type="number" class="form-control" placeholder="" required>
                </div>
            </div>

            <div v-if="isChangeDate" class="col-lg-4">
              <label for="date" class="form-label">Date</label>
              <input v-model="newDate" type="date" class="form-control" id="date" placeholder="" value="" :min=currentDay required>
              <div class="invalid-feedback">
                Valid first name is required.
              </div>
            </div>
        

        <hr class="my-4">

        <button @click="editBooking" class=" btn btn-primary btn-lg" type="submit">Edit This Booking</button>
        </form>
    </div>
</template>