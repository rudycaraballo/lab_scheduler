<script setup>
import RoomCard from "../components/RoomHomeCard.vue";
import Pagination from "@/components/Pagination.vue";
</script>
<template>

    <div class="album py-5 ">
    <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <RoomCard />
        <RoomCard />
        <RoomCard />
      </div>
    </div>
  </div>

  <div class="container">
    <Pagination />
  </div>

</template>