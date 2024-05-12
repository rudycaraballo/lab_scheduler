<script setup>
import { jwtDecode } from 'jwt-decode';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();
const token = localStorage.getItem('token');

let accountRoute = ref("/account")
let isLoggedIn = ref(false);

let user = null;

if (token) {
  user = jwtDecode(token); 
  isLoggedIn.value = true;

  if(user.role === "admin") {
    accountRoute.value = "/admin"
  }
}


const logOut = () => {
  localStorage.removeItem("token");
  isLoggedIn.value = false;
  router.push("/")
}

</script>

<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg fixed-top">
      <div class="container-fluid">
        <a href="/">
          <img src="/logo.jpg" alt="logo" id="logo">
        </a>
  
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">

          </ul> 
          <a class="nav-link" href="/rooms">Rooms</a>
          <a class="nav-link" :href=accountRoute>Account</a>
          <a class="nav-link" href="/sign-up">Sign Up</a>
          <RouterLink v-if="!isLoggedIn" to="/login" class="btn btn-primary btn-sm ">Log In</RouterLink>
          <button v-else @click=logOut class="btn btn-primary btn-sm " type="submit">Log Out</button>
      
   
        </div>
      </div>
    </nav>
  </div>

    
</template>

<style scoped>
#logo {
  max-width: 120px;
}

.nav-link, .btn-sm {
  margin-left: 20px;
}


</style>

