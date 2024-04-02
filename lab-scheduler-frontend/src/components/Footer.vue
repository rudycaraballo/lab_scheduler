<script setup>
const d = new Date();
let currYear = d.getFullYear();
</script>

<template>
    <div class="container">
  <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <p class="col-md-4 mb-0 text-body-secondary">&copy; {{ currYear }} Company, Inc</p>

    <a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
      <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg>
    </a>

    <ul class="nav col-md-4 justify-content-end">
      <li class="nav-item"><RouterLink to="/" class="nav-link px-2 text-body-secondary">Home</RouterLink></li>
      <li class="nav-item"><a href="#features" class="nav-link px-2 text-body-secondary">Features</a></li>
      <li class="nav-item"><RouterLink to="/rooms" class="nav-link px-2 text-body-secondary">Rooms</RouterLink></li>
      <li class="nav-item"><RouterLink to="/about" class="nav-link px-2 text-body-secondary">About</RouterLink></li>
    
    </ul>
  </footer>
</div>
</template>