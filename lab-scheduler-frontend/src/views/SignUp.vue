
<template>
<main class="form-signin w-100 m-auto">
  <form @submit.stop.prevent="submit">
    <h1 class="h3 mb-3 fw-normal">Sign Up</h1>

    <div class="form-floating">
      <input v-model="user.fname" type="text" class="form-control" id="floatingInput" placeholder="name@example.com" required>
      <label for="floatingInput">First Name</label>
    </div>
    <div class="form-floating">
      <input v-model="user.lname" type="text" class="form-control" id="floatingInput" placeholder="name@example.com" required>
      <label for="floatingInput">Last Name</label>
    </div>
    <div class="form-floating">
      <input v-model="user.idNum" type="number" class="form-control" id="floatingInput" placeholder="name@example.com" required>
      <label for="floatingInput">700 Identification Number</label>
    </div>
    <div class="form-floating">
      <input v-model="user.email" type="email" class="form-control" id="floatingInput" placeholder="name@example.com" required>
      <label for="floatingInput">SUNY Old Westbury Email</label>
    </div>
    <div class="form-floating">
      <input v-model="user.altEmail" type="email" class="form-control" id="floatingInput" placeholder="name@example.com" required>
      <label for="floatingInput">Alternate Email Address</label>
    </div>

    <div class="form-floating">
      <input v-model="user.pword" type="password" class="form-control" id="floatingPassword" placeholder="Password" required>
      <label for="floatingPassword">Password</label>
    </div>

    <div class="form-floating">
      <input v-model="user.confirmPword" type="password" class="form-control" id="floatingPassword" placeholder="Password" required>
      <label for="floatingPassword">Confirm Password</label>
    </div>

    <div class="form-check text-start my-3">
    </div>
    <p class="mt-5 mb-3 text-body-secondary">Already have an account? <RouterLink to="/login">Log In</RouterLink></p>
    <div class="row">
      <button @click="signUp" class="btn btn-primary w-100 py-2 col-lg-6" >Sign Up</button>
    </div>
    </form>
</main>
</template>

<script setup >
import axios from "axios";
import { useRouter } from 'vue-router';
import bcrypt from "bcryptjs";
import { API_ENDPOINT } from "../../global";

const router = useRouter();

let user = {
    fname: "",
    lname: "",
    idNum: "",
    pword: "",
    email:"",
    altEmail: "",
    confirmPword: "",
}

const signUp = async () => {
    //check for any empty missing values
    for (const [key, value] of Object.entries(user)) {
        if (value === "" ) {
            alert("One of your inputs are empty, Please check and try again")
            return
        }
    }

    if(user.confirmPword != user.pword) {
        alert("Passwords do not match please try again");
        return;
    }

    
    const isOwEmail = /^[^\s@]+@oldwestbury\.edu$/;
    if(!isOwEmail.test(user.email)) {
        alert("Your SUNY Old Westbury Email is not a valid email. Please try again")
        return;
    }

user.pword = await bcrypt.hash(user.pword, 10);  
  await axios.post(`${API_ENDPOINT}/signup`, user)
  .then(function (response) {
    if(response.status == 201) {
      router.push('/account')
    }  

  })
  .catch(function (error) {
    if(error.response.status == 409) {
      alert("There is an account that already exists for this email")
    } else {
      alert(error.message);
    }
  });
}


</script>

<style scoped>
  .form-signin {
  max-width: 330px;
  margin-top: 100px !important;
  padding: 1rem;
}

.form-floating {
    margin-bottom: 10px;
}
</style>