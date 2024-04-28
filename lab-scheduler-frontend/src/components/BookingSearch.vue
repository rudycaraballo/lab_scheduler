<script setup>
let startTime;
let endTime;

const filterTime = () => {
  console.log(date);
  console.log(time);
}
</script>

<template>
    <div id="booking-search" class="container booking-srch">

        <div id="booking-search-row" class="row g-4" style="margin-bottom: 50px;">

            <div class="col-lg-2">

              <label for="startTime" class="form-label">Start Time</label>
              <input v-model="date" type="time" class="form-control" id="time" placeholder="" value="" step="900" required>
              <div class="invalid-feedback">
                Valid first name is required.
              </div>

            </div>
            <div class="col-lg-2">

            <label for="endTime" class="form-label">End Time</label>
            <input v-model="date" type="time" class="form-control" id="time" placeholder="" value="" required>
            <div class="invalid-feedback">
              Valid first name is required.
            </div>

            </div>
            <div class="col-lg-2">
              <label for="date" class="form-label">Date</label>
              <input v-model="time" type="date" class="form-control" id="date" placeholder="" value="" required>
              <div class="invalid-feedback">
                Valid first name is required.
              </div>
              
            </div>
            <div class="col-lg-2">
              <button @click="filterTime" id="" class="btn btn-primary btn-sm " type="submit">Search</button>
            </div>

        </div>

    </div>
</template>


<style scoped>
.booking-search-row {
    margin-bottom: 50px !important;
}
</style>