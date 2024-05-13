<script setup>
import { defineProps, ref } from 'vue';

const props = defineProps(["room"])

let roomNumFixed = props.room.RoomNum < 1000 ? ("0" + props.room.RoomNum) : props.room.RoomNum;
const imageUrl = ref(`/rm${roomNumFixed}.jpg`);
const roomUrl = `/room-desc/${props.room.RoomNum}/${props.room.BuildingName}`

</script>

<template>
        <div class="col">
          <div class="card shadow-sm">
            <div class="text-center rm-wrapper">
              <img class="rm-img" :src=imageUrl></img>
            </div>
            <div class="card-body">
              <p class="card-text">Building: {{room.BuildingName}}</p>
              <p class="card-text">Room Number: {{roomNumFixed}}</p>
              <p class="card-text">Capacity: {{room.Capacity}}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <RouterLink :to=roomUrl class="btn btn-sm">View Room</RouterLink>
                </div>
                <small class="text-body-secondary">Available Today</small>
              </div>
            </div>
          </div>
        </div>
</template>

<style scoped>
.rm-wrapper {
  height: 300px;
}
.rm-img {
  width: 100%;
  height: 100%;

}

.card {
      transition: transform 0.3s ease; /* Smooth transition for transform property */
      max-width: 350px;
    }

.card:hover {
    transform: scale(1.050);
    box-shadow: rgba(0, 0, 0, 0.24) 0px 5px 10px
}
</style>