
<script setup>
import router from "../router";
import { ref, onBeforeMount} from "vue";

let roomNum = 1100
const route = ref(`/rm${roomNum}.jpg`)
const route3 = ref(`/public/rm${roomNum}.jpg`)

const route2 = ref(`/src/assets/rm${roomNum}.jpg`)

</script>

<template>

  <div class="container col-xxl-8 px-4 py-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6">
        <img src="/meeting.jpg" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="900" height="700" loading="lazy">

      </div>
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold lh-1 mb-3">Unigather</h1>
        <p class="lead">"Reserve, Research, Discover — Book Your Lab Space Today!"</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          <RouterLink to="/rooms" class="btn btn-primary btn-lg px-4 me-md-2">Book a Room</RouterLink>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>
.container {
  padding-top: 0px !important;
}
.d-block {
  border-radius: 50px !important;
  height: 400px !important;
}
.btn {
  border-radius: 0 !important;
}
.text-center {
  margin-top: 0px !important;
  padding-top: 150px !important;
  color: white
}
</style>

