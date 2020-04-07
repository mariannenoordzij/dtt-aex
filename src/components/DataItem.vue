<template>
  <RouterLink :to="type == 'archive' ? `/event/${event.id}` : 'random' ? `/event/${event.id}` : `/event/${event.id}` " :class="{ playing: event.dateUnix_start <= time && event.dateUnix_end > time, ended: event.dateUnix_start < time && event.dateUnix_end < time }" class="data_item" :type="type">
    <p class="bold">{{ event.name | truncate(400, '..') }}</p>
    {{type}}

    <p class="mono">{{ event.time_start }} CET</p>
    <p v-if="event.initiator">by {{ event.initiator | truncate(400, '..')}}</p>
    <div id="container" v-if="event.image">
      <img :src="event.image.url"/>
    </div>
  </RouterLink>
</template>

<script lang="ts">
import Vue from 'vue'
import moment from 'moment'



export default Vue.extend({
  name: 'DataItem',
  props: [ 'event', 'time', 'type' ],
  filters: {
    truncate: function (text : string, stop : number, clamp : string ) {
    return text.slice(0, stop) + (stop < text.length ? clamp || '...' : '');
    }
  }
});
</script>

<style scoped>
p {
  flex: none;
}

.mono {
  font-family: 'Kosugi', sans-serif;
}

#container {
  position:relative;
  flex-grow: 1;
  width:100%;
  height:20%;
  bottom:0;
}

#container img {
  width:100%;
  height:100%;
  object-fit: cover;
  object-position: center center;
}

.data_item {
  box-sizing: border-box;
  display: flex; 
  flex-direction: column;
  /* position:relative; */
  /* display:flex; */
  /* flex-grow: 1; */
  width:25%;
  height:24.9vw;
  border: 2px solid #eeeeee;
  padding:5px;
  background-color:white;
  border-radius:12px;
  cursor: pointer;
  text-decoration: none;
}

.playing{
  border: 1px solid red; 
  background-color:#eeeeee;
}

.playing p { 
  color: red;
}


.ended{
  color:black;
  background-color:white;
  /* border: 1px solid#A0A0A0; */

}

@media only screen and (max-width: 800px) {
  .data_item {
      width:50%;
      height:49.9vw;
      font-size:16px;
      hyphens: auto;
      letter-spacing: -0.2px;
  }

  p {
    line-height:1.1;
    word-spacing: -1px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}

</style>