<script setup>
import {ref} from "vue"
const props = defineProps(['rmNumCheckout', "buildingNameCheckout", "capacity", "startTime", "endTime", "date"])

let roomNumFixed = props.rmNumCheckout < 1000 ? ("0" + props.rmNumCheckout) : props.rmNumCheckout;
const imageUrl = ref(`/rm${roomNumFixed}.jpg`);

</script>

<template>
  <div class="row mb-2 align-items-center">
   <div class="col-md-12">
     <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
       <div class="col p-4 d-flex flex-column position-static =">
           <div class="col-lg-12 d-none d-lg-block img-wrapper">
            <img class="rm-img" :src=imageUrl></img>
           </div>
         <strong class="d-inline-block mb-2 text-primary-emphasis">{{ buildingNameCheckout}}</strong>
         <h3 class="mb-0">Room #{{ rmNumCheckout }}</h3>
         <div class="mb-1 text-body-secondary">{{date}}</div>
         <p class="card-text mb-auto">Capacity: {{ capacity }}.</p>
         <p class="card-text mb-auto">Start of the Event: {{ startTime }}.</p>
         <p class="card-text mb-auto">End of The Event: {{ endTime }}.</p>
       </div>
     </div>
   </div>
 </div>
</template>

<style scoped>
.rm-img {
  max-width: 365px;

}
</style>