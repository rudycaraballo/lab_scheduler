<script setup>

defineProps({
  route: {
    type: String,
    required: true
  }
})
</script>


<template>
     <div class="row mb-2">
    <div class="col-md-12">
      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2 text-primary-emphasis">NAB</strong>
          <h3 class="mb-0">Room #FFF</h3>
          <div class="mb-1 text-body-secondary">Nov 12</div>
          <p class="card-text mb-auto">This is example text that will contain a short description of the room such aas capacity, technology in the room, and any unique room features.</p>
          <button type="button"  class="btn btn-primary btn-sm col-md-2"><RouterLink to="/room-desc" class="nav-link active">Book a Room</RouterLink></button>
        </div>
        <div class="col-auto d-none d-lg-block">
          <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
        </div>
      </div>
    </div>
  </div>
</template>