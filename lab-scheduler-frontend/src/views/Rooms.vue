<script setup>
import RoomCard from "../components/HomeCard.vue";
import Pagination from "@/components/Pagination.vue";
import DescriptionCard from "@/components/DescriptionCard.vue";
import BookingSearch from "@/components/BookingSearch.vue";
</script>
<template>

   <BookingSearch />
  
    <div class="container">
        <DescriptionCard route="/room-desc"/>
        <DescriptionCard route="/room-desc"/>
        <DescriptionCard route="/room-desc"/>
        <DescriptionCard route="/room-desc"/>
        <DescriptionCard route="/room-desc"/>
        <DescriptionCard route="/room-desc"/>
        <Pagination />
    </div>

</template>