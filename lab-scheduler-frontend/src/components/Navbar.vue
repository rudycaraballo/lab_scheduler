<!-- 
<script setup>
import router from "../router";

let goHome = () => router.push("/")
</script> -->
//DONT KNOW IF THE ABOVE WILL BE NEEDED, CHECK BACK WHEN AUTHORIZATION IS IMPLEMENTED

<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg fixed-top">
      <div class="container-fluid">
        <a href="/">
          <img src="/src/assets/images/logo.jpg" alt="logo" id="logo">
        </a>
  
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
    
          </ul>
          <RouterLink to="/rooms" class="nav-link nav-anchors active">Rooms</RouterLink>
          <RouterLink to="/about" class="nav-link nav-anchors active">About</RouterLink>
          <RouterLink to="/account" class="nav-link nav-anchors account">Account</RouterLink>
          <RouterLink to="/sign-up" class="nav-link nav-anchors sign-up">Sign Up</RouterLink>
          <button id="lg-i-btn" class="btn btn-primary btn-sm justify-content-center" type="submit"><RouterLink to="/login" class="nav-link active">Sign In</RouterLink></button>
        </div>
      </div>
    </nav>
  </div>

    
</template>

<style scoped>
#logo {
  max-width: 120px;
}
.nav-anchors {
  margin-left: 10px;
}
#lg-i-btn {

  margin-left: 10px;
}

.sign-up {
  margin-left: 10px;
}




</style>

