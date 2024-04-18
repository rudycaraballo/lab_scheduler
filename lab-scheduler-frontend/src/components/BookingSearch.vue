<template>
    <div id="booking-search" class="container booking-srch">
        <div class="row g-4">
            <div class="col-lg-3">
              <label for="firstName" class="form-label">Time</label>
              <input type="text" class="form-control" id="firstName" placeholder="" value="" required>
              <div class="invalid-feedback">
                Valid first name is required.
              </div>
            </div>
            <div class="col-lg-3">
              <label for="date" class="form-label">Date</label>
              <input type="text" class="form-control" id="firstName" placeholder="" value="" required>
              <div class="invalid-feedback">
                Valid first name is required.
              </div>
            </div>
        </div>
        <button id="lg-i-btn" class="btn btn-primary btn-sm col-lg-3" type="submit">Search</button>
    </div>
</template>


<style scoped>
.booking-search {
    margin:100px 100px 100px 100px;
}
</style>