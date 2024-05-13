<script setup>
import { ref, defineProps } from 'vue';
const props = defineProps(['room'])

let roomNumFixed = props.room.RoomNum < 1000 ? ("0" + props.room.RoomNum) : props.room.RoomNum;




const imageUrl = ref(`/rm${roomNumFixed}.jpg`);




const route = `room-desc/${props.room.RoomNum}/${props.room.BuildingName}`

</script>


<template>
     <div class="row mb-2" data-aos="fade-right" data-aos-duration="2000">
    <div class="col-md-12">
      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2 text-primary-emphasis">{{ room.BuildingName }}</strong>
          <h3 class="mb-0">Room #{{roomNumFixed}}</h3>
          <p class="card-text mb-auto">Room capacity {{ room.Capacity }}.</p>
          <button type="button"  class="btn btn-primary btn-sm col-md-2"><RouterLink :to=route class="nav-link active ">Book Room</RouterLink></button>
        </div>
        <div class="col-auto d-none d-lg-block">
            <img class="rm-img" :src=imageUrl></img>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.rm-img {
  max-width: 200px;
  
}
</style>