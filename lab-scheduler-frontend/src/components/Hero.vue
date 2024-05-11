
<script setup>
import router from "../router";
import { ref, onBeforeMount} from "vue";

let roomNum = 1100
const route = ref(`/rm${roomNum}.jpg`)
const route3 = ref(`/public/rm${roomNum}.jpg`)

const route2 = ref(`/src/assets/rm${roomNum}.jpg`)

</script>

<template>
     <!-- <div class="px-4 py-5 my-4 text-center">
    <h1 class="display-5 fw-bold ">Booking with Ease </h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4">Unlock Your Perfect Space: Book Your Room, Anytime, Anywhere!</p>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button"  class="btn btn-primary btn-lg px-4"><RouterLink to="/rooms" class="nav-link active">Book a Room</RouterLink></button>
      </div>
    </div>
  </div> -->

  <div class="container col-xxl-8 px-4 py-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6">
        <img :src=route class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="900" height="700" loading="lazy">
        <img :src=route2 class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="900" height="700" loading="lazy">
        <img :src=route3 class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="900" height="700" loading="lazy">
      </div>
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold lh-1 mb-3">Unigather</h1>
        <p class="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
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

