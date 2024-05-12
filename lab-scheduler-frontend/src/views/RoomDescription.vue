<script setup>
import BookingCard from "../components/BookingCard.vue";

const props = defineProps(['rmNum', "buildingName"])

</script>

<template>
        <div class="container">
        <BookingCard :rmNum="rmNum" :buildingName="buildingName"/>
    </div>
</template>