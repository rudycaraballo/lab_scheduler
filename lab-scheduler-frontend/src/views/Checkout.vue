<script setup>
import CheckoutCard from "@/components/CheckoutCard.vue";
import { ref } from 'vue';
//TODO: check that props passed arent empty, This would mean /checkout endpoint was got raw

const props = defineProps(['rmNumCheckout', "buildingNameCheckout"])
const isChecked = ref(false);


// State to track whether the checkbox is checked

let checkoutForm = {
  fname:"",
  lname:"",
  idNum:"",
  owEmail:"",
  altEmail:"",
  expectedAttendants: 0,
  section: "",
  itTicket:""
}

const emailTicket = async () => {

}

const checkout = async () => {
      //check for any empty missing values
      for (const [key, value] of Object.entries(checkoutForm)) {
        console.log(key);
        if (value === "" && key !== "section" && key !== "itTicket") {
            alert("One of your inputs are empty, Please check and try again")
            event.preventDefault();
            return
        }
    }

    //Check that email is a oldwestbury email
    const isOwEmail = /^[^\s@]+@oldwestbury\.edu$/;
    console.log(isOwEmail.test(checkoutForm.owEmail));
    console.log(checkoutForm.owEmail);

    if(!isOwEmail.test(checkoutForm.owEmail)) {
        alert("Your SUNY Old Westbury Email is not a valid email. Please try again")
        event.preventDefault();
        return;
      }
      //is attendants bigger then capacity?

      if(checkoutForm.itTicket !== "") {
        
      }
}
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
        <CheckoutCard :rmNumCheckout="rmNumCheckout" :buildingNameCheckout="buildingNameCheckout"/>
      </div>
      
      <div class="col-md-5 col-lg-6">
        <form @submit.stop.prevent="submit" class="needs-validation" novalidate>
          <div class="row g-3">
            <div class="col-sm-6">
              <label  for="firstName" class="form-label">First name</label>
              <input v-model="checkoutForm.fname" type="text" class="form-control" id="firstName" placeholder="" value="" required>
              <div class="invalid-feedback">
                Valid first name is required.
              </div>
            </div>

            <div class="col-sm-6">
              <label for="lastName" class="form-label">Last name</label>
              <input v-model="checkoutForm.lname" type="text" class="form-control" id="lastName" placeholder="" value="" required>
              <div class="invalid-feedback">
                Valid last name is required.
              </div>
            </div>

            
            <div class="col-12">
              <label for="sevenHundredNum" class="form-label">700 # </label>
              <input v-model="checkoutForm.idNum" type="number" class="form-control" id="email" placeholder="" required>
              <div class="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>

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
  