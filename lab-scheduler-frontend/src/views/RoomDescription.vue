<script setup>
import BookingCard from "../components/BookingCard.vue";
//TODO: if props are empty send 404

const props = defineProps(['rmNum', "buildingName"])

</script>

<template>
        <div class="container">
        <BookingCard :rmNum="rmNum" :buildingName="buildingName"/>
    </div>
</template>