<script setup>
import {ref} from "vue"
const props = defineProps(['rmNumCheckout', "buildingNameCheckout"])
console.log(props.rmNumCheckout);
console.log(props.buildingNameCheckout);

let roomNumFixed = props.rmNumCheckout < 1000 ? ("0" + props.rmNumCheckout) : props.rmNumCheckout;
const imageUrl = ref(`/src/assets/images/rm${roomNumFixed}.jpg`);

//TODO: check that the room in the link even exists in DB
//TODO: add
</script>

<template>
  <div class="row mb-2">
   <div class="col-md-12">
     <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
       <div class="col p-4 d-flex flex-column position-static">
           <div class="col-lg-12 d-none d-lg-block">
            <img class="rm-img" :src=imageUrl></img>
           </div>
         <strong class="d-inline-block mb-2 text-primary-emphasis">{{ buildingNameCheckout}}</strong>
         <h3 class="mb-0">Room #{{ rmNumCheckout }}</h3>
         <div class="mb-1 text-body-secondary">Nov 12</div>
         <p class="card-text mb-auto">This is example text that will contain a short description of the room such aas capacity, technology in the room, and any unique room features.</p>
       </div>
     </div>
   </div>
 </div>
</template>

<style scoped>
.rm-img {
  max-width: 300px;
  padding: .5em;
}
</style>