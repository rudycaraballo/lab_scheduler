<script setup>
import { ref, defineProps } from 'vue';
const props = defineProps(['room'])

const imageUrl = ref(`/src/assets/images/rm${props.room.RoomNum}.jpg`);
const route = `room-desc/${props.room.RoomNum}/${props.room.BuildingName}`

</script>


<template>
     <div class="row mb-2">
    <div class="col-md-12">
      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2 text-primary-emphasis">{{ room.BuildingName }}</strong>
          <h3 class="mb-0">Room #{{room.RoomNum}}</h3>
          <div class="mb-1 text-body-secondary">Nov 12</div>
          <p class="card-text mb-auto">This is example text that will contain a short description of the room such as capacity, technology in the room, and any unique room features.</p>
          <button type="button"  class="btn btn-primary btn-sm col-md-2"><RouterLink :to=route class="nav-link active">Book Room</RouterLink></button>
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
  padding: 1.5em;
}
</style>