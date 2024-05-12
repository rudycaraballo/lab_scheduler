<script setup>
import { defineProps } from 'vue';

const props = defineProps(["bookingNum", "userName", "startTime", "endTime", "date", "building", "rmNum", "userId"])

let timeLine = `${convertTo12HourFormat(props.startTime)}-${convertTo12HourFormat(props.endTime)}`
let roomNumFixed = props.rmNum < 1000 ? ("0" + props.rmNum) : props.rmNum;

function convertTo12HourFormat(timeString) {
    const [hours, minutes, seconds] = timeString.split(':');
    const hoursInt = parseInt(hours, 10);
    const period = hoursInt >= 12 ? 'PM' : 'AM';
    const twelveHour = (hoursInt % 12) || 12;
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