<script setup>
import { defineProps } from 'vue';

const props = defineProps(["bookingNum", "userName", "startTime", "endTime", "date", "building", "rmNum", "userId"])

let timeLine = `${convertTo12HourFormat(props.startTime)}-${convertTo12HourFormat(props.endTime)}`
let roomNumFixed = props.rmNum < 1000 ? ("0" + props.rmNum) : props.rmNum;

function convertTo12HourFormat(timeString) {
    // Split the time string by colon to extract hours, minutes, and seconds
    const [hours, minutes, seconds] = timeString.split(':');

    // Convert the hours part to an integer to perform calculations
    const hoursInt = parseInt(hours, 10);
    
    // Determine if it's AM or PM based on the hour
    const period = hoursInt >= 12 ? 'PM' : 'AM';
    
    // Convert hour to 12-hour format
    const twelveHour = (hoursInt % 12) || 12;

    // Construct the new time string in 12-hour format
    return `${twelveHour}:${minutes}:${seconds}${period}`;
}
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