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
        <RouterLink to="/" class="navbar-brand">Unigather</RouterLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <!-- TODO: make an on hover action on each link to give and remove the actice class state -->
            <li class="nav-item">
              <RouterLink to="/rooms" class="nav-link active">Rooms</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/about" class="nav-link active">About</RouterLink>
            </li>
            <!-- <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li> -->
    
          </ul>
          <RouterLink to="/account" class="nav-link active">Account</RouterLink>
          <button id="lg-i-btn" class="btn btn-primary btn-sm" type="submit"><RouterLink to="/login" class="nav-link active">Log In</RouterLink></button>
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped>
#lg-i-btn {

  margin-left: 10px;
}



</style>

