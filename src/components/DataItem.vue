<template>
  <!-- Data-Item functions as a whole is a router-link to the Popup page of the current Event (DataItem). The class .playing binds when the current event is happening at the time of accessing the page. -->
  <RouterLink :to="type == 'archive' ? `/event/${event.id}` : 'random' ? `/event/${event.id}` : `/event/${event.id}` " :class="{ playing: event.dateUnix_start <= time && event.dateUnix_end > time, ended: event.dateUnix_start < time && event.dateUnix_end < time }" class="data_item" :type="type">
    <!-- Event data -->
    <h1 class="bold">{{ event.name }}</h1>
    <p>{{type}}</p>
    <h2 class="mono">{{ event.time_start }} CET</h2>
    <h2 v-if="event.initiator">by {{ event.initiator }}</h2>
    <div id="container" v-if="event.image">
      <img :src="event.image.url" alt="">
    </div>
  </RouterLink>
</template>

<script lang="ts">
import Vue from 'vue'
import moment from 'moment'

export default Vue.extend({
  name: 'DataItem',
  props: [ 'event', 'time', 'type' ]
});
</script>

<style scoped lang="css">

/* ==========================================================================
   Data Item component (event-thumbnail) styling
   ========================================================================== */


#container {
  position:relative;
  bottom:0;
  width:100%;
  height:20%;
  flex-grow: 1; 
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
  width:25%;
  height:24.9vw;
  padding:5px;
  border: 2px solid #eee;
  background-color: #fff;
  border-radius:12px;
  cursor: pointer;
  text-decoration: none;
}

.playing {
  border: 1px solid #f00; 
  background-color: #eee;
}

.playing p { 
  color: #f00;
}

.ended {
  color: #000;
  background-color: #fff;
}

@media only screen and (max-width: 800px) {
  .data_item {
    width:50%;
    height:49.9vw;
    hyphens: auto;
    letter-spacing: -0.2px;
  }
}
</style>