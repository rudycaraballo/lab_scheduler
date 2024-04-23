<script setup>
import RoomCard from "../components/HomeCard.vue";
import Pagination from "@/components/Pagination.vue";
import DescriptionCard from "@/components/DescriptionCard.vue";
import BookingSearch from "@/components/BookingSearch.vue";
import axios from "axios";
import { ref, onBeforeMount } from "vue";


let rooms = ref([]);
//Loading all rooms before mounting
onBeforeMount(async () => {
  try {
    const response = await axios.get('http://localhost:3000/available-rooms');
    rooms.value = response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
  }
});
</script>

<template>
  <BookingSearch />

  <div class="container">

    <DescriptionCard v-for="room in rooms" :key="room.id" :room="room"/>

    <Pagination />
  </div>
</template>
