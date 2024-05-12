<script setup>
import axios from "axios";
import { useRouter } from 'vue-router';
import { jwtDecode } from "jwt-decode";
import { API_ENDPOINT } from "../../global";

const router = useRouter();
let email = ""
let password = ""

const login = async () => {
  axios.post(`${API_ENDPOINT}/login`, {
    email: email,
    pword: password
  })
  .then(function (response) {
    if(response.status !== 200) {
      throw err;
    }
    localStorage.setItem('token', response.data.accessToken);
    let user = jwtDecode(response.data.accessToken);
    if(user.role === "admin"){
      window.location.href = "/admin"; 
    } else {
      window.location.href = "/account"; 
    }
  })
  .catch(function (error) {
    console.log(error.response.status);
    if(error.response.status === 401) {
      alert("Invalid Username or Password Entered")
    } else {
      alert(error)
    }
  });


}
</script>

<template>

 <main class="form-signin w-100 m-auto">
  <form @submit.stop.prevent="submit">
    <h1 class="h3 mb-3 fw-normal">Log In</h1>

    <div class="form-floating">
      <input v-model="email" type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
      <label for="floatingInput">Email address</label>
    </div>
    <div class="form-floating">
      <input v-model="password" type="password" class="form-control" id="floatingPassword" placeholder="Password">
      <label for="floatingPassword">Password</label>
    </div>

    <div class="form-check text-start my-3">
    </div>
    <p class="mt-5 mb-3 text-body-secondary">Don't have an account? <RouterLink to="/sign-up" >Sign Up</RouterLink></p>
    <div class="row">
      <button @click="login" class="btn btn-primary w-100 py-2 col-lg-6">Log In</button>
    </div>
    </form>
</main>
</template>

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
