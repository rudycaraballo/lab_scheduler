<script setup>
import CheckoutCard from "@/components/CheckoutCard.vue";
import { ref } from 'vue';
import {jwtDecode} from 'jwt-decode';
import axios from "axios";
import { useRouter } from 'vue-router';
import { API_ENDPOINT } from "../../global";


const token = localStorage.getItem('token');
const roomId = localStorage.getItem('roomId');
const buildingId = localStorage.getItem('buildingId');

const router = useRouter();

let user = jwtDecode(token); 
const props = defineProps([
  'rmNumCheckout', 
  "buildingNameCheckout",
  "capacity",
  "date",
  "startTime",
   "endTime"
])

let isChecked = ref(false);



let checkoutForm = {
  userID: user.userId,
  owEmail: user.username,
  buildingID: buildingId,
  roomId: roomId,
  altEmail:"",
  dayBooked: props.date,
  startTime: props.startTime,
  endTime: props.endTime, 
  expectedAttendants: 0,
  section: "",
  itTicket:""
}


const checkout = async () => {

      for (const [key, value] of Object.entries(checkoutForm)) {
        if (value === "" && key !== "section" && key !== "itTicket") {
            alert("One of your required inputs are empty, Please check and try again")
            return
        }
    }

    //Check that email is a oldwestbury email
    const isOwEmail = /^[^\s@]+@oldwestbury\.edu$/;
    if(!isOwEmail.test(checkoutForm.owEmail)) {
        alert("Your SUNY Old Westbury Email is not a valid email. Please try again")
        return;
      }

      if(checkoutForm.expectedAttendants > parseInt(props.capacity)) {
        alert("You have too many attendants for this room, please lower your capacity")
        return;
      }

      if(checkoutForm.itTicket !== "") {
        let emailForm = {
          "email": checkoutForm.owEmail,
          "altEmail": checkoutForm.altEmail,
          "message": checkoutForm.itTicket
        }
          try {
            const response = await axios.post(`${API_ENDPOINT}/send-email`, emailForm)
          } catch (error) {
            alert(error)
          }
      }

      try {
        const response = await axios.post(`${API_ENDPOINT}/create-booking`, checkoutForm)
        if(response.status == 201) {
          router.push('/account')
        }  
      } catch (error) {
        console.log(error);
      }

}
</script>

<template>
    <div class="container" style="max-width: 900px;">
      <main>
    <div class="py-5 text-center">
     
      <h2>Checkout</h2>
    </div>

    <div class="row g-5">
      <div class="col-md-7 col-lg-6 order-md-last">
        <CheckoutCard 
        :rmNumCheckout="rmNumCheckout" 
        :buildingNameCheckout="buildingNameCheckout"
        :capacity="capacity" 
        :startTime="startTime" 
        :endTime="endTime" 
        :date="date"
        />
      </div>
      
      <div class="col-md-4 col-lg-5">
        <form @submit.stop.prevent="submit" class="needs-validation" novalidate>
          <div class="row g-3">
        

            <div class="col-12">
              <label for="owEmail" class="form-label">SUNY OW Email </label>
              <input v-model="checkoutForm.owEmail" type="email" class="form-control" id="email" placeholder="" required>
              <div class="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>

            <div class="col-12">
              <label for="altEmail" class="form-label">Alternate Email </label>
              <input  v-model="checkoutForm.altEmail" type="email" class="form-control" id="email" placeholder="" required>
              <div class="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>

            <div class="col-12">
              <label for="attendants" class="form-label">Number of expected attendants</label>
              <input v-model="checkoutForm.expectedAttendants" type="number" class="form-control" id="email" placeholder="" required>
              <div class="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>

            <div class="col-12">
              <label for="section" class="form-label">Subject/Number/Section (Optional)</label>
              <input v-model="checkoutForm.section" type="text" class="form-control" id="email" placeholder="" required>
              <div class="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>

            <div class="d-block my-3">
              <div class="custom-control custom-checkbox">
          <input v-model="isChecked" type="checkbox" class="custom-control-input" id="same-address">
          <label class="custom-control-label" for="same-address">Need IT Support For The Event?</label>
        </div>
        </div>

            <div v-if="isChecked" class="form-group">
            <label for="exampleFormControlTextarea1">IT Service Ticket</label>
            <textarea v-model="checkoutForm.itTicket" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
        
          </div>

        <hr class="my-4">

        <button @click="checkout" class="w-100 btn btn-primary btn-lg" type="submit">Confirm Booking</button>
        </form>

      </div>
    </div>
  </main>
    </div>
  </template>

  <style scoped>
  .custom-control-input {
    padding-left: 10px !important;
  }
  </style>
  