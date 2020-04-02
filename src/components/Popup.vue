<template>
  <div id="popup">
    <p>{{ event.name }}</p>
    <p>{{ event.time_start }} CET</p>
    <p v-if="event.initiator">by {{ event.initiator }}</p>
    <p>location: <a target="_blank" v-bind:href="event.streaming">{{ event.streaming }}</a></p>
    <div v-if="event.description"><br><div v-html="event.description"></div></div>
    <p v-if="event.donate"><br>donation link: <a target="_blank" v-bind:href="event.donate">{{ event.donate }}</a></p>
    <img v-if="event.image" :src="event.image.url"/>
    <div class="footer">
      <router-link :to="type == 'archive' ? '/archive' : '/' " class="footer_back">back</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Popup',
  props: ['event', 'type'],
});
</script>

<style scoped>
#popup {
  position:fixed;
  overflow-wrap: normal;
  top:0;
  left:0;
  height:100%;
  width:100%;
  padding: 60px 8px 60px;
  background-color: white;
  overflow-x:hidden;
}

img {
  margin-top:5px;
  width:100%;
  height:auto;
}

.footer {
  box-sizing:border-box;
  position:fixed;
  width:100%;
  height:50px;
  bottom:0;
  left:0;
  border: 1px solid black;
  background-color: white;
  z-index:100;
}


.footer_back {
  text-align:center;
  text-decoration:none;
  width: 100%;
  height:50px;
  display: block;
  line-height: 50px;
}
</style>