<script setup>
import { defineProps } from 'vue';

const props = defineProps(["bookingNum", "userName", "startTime", "endTime", "date", "building", "rmNum", "userId"])

let timeOfDay = props.startTime
let timeLine = `${props.startTime}pm-${props.endTime}pm`
let roomNumFixed = props.rmNum < 1000 ? ("0" + props.rmNum) : props.rmNum;

</script>

<template>
             <tr>
                  <td>{{bookingNum}}</td>
                  <td>{{userName}}</td>
                  <td>{{userId}}</td>
                  <td>{{timeLine}}</td>
                  <td>{{date}}</td>
                  <td>{{building}} {{roomNumFixed}}</td>
                </tr>
</template>