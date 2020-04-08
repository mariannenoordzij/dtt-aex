<template>
  <div id="popup">
    <!-- Image container for event picture -->
    <div class="img-container">
      <img v-if="event.image" :src="event.image.url"/>
    </div>
    <!-- Event data -->
    <h1 v-if="event.name">{{ event.name }}</h1>
    <h2 class="mono" v-if="event.time_start">{{ event.time_start }} CET</h2>
    <h2 v-if="event.initiator">by {{ event.initiator }}</h2>
    <p v-if="event.streaming">location: 
      <a target="_blank" v-bind:href="event.streaming">{{ event.streaming }}</a>
    </p>
    <p v-if="event.donate">donation link: 
      <a target="_blank" v-bind:href="event.donate">{{ event.donate }}</a>
    </p>
    <div v-if="event.description">
      <br>
      <div v-html="event.description"></div>
    </div>
    <br>
    <!-- Rendering of max 3 related events when relatedEvents is a list of events by the same initiator/organiser -->
    <p v-if="relatedEvents.length != 0">related events:</p>
    <div id="relatedWrap">
      <br>
      <DataItem class="related" v-for="(event, key) in relatedEvents" :event="event" :key="key"></DataItem>
    </div>
    <div class="go-back">
      <!-- Router-link back to the page where the visitor clicked on the Data-Item -->
      <router-link :to="(type == 'archive') ? '/archive' : ((type == 'timetable') ? '/' : '/random') "><a>back</a></router-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import DataItem from '@/components/DataItem.vue'

// as soon as the props were received: after the page/component loaded checkForSameInitiator will fill the array relatedEvents with events by the same initiator/organiser as current Data-Item.

export default Vue.extend({
  name: 'Popup',
  props: ['event', 'type', 'events'],
  components: {
    DataItem
  },
  data() {
    return {
      relatedEvents: new Array<Object>(),
    }
  },
  mounted() {
    if (this.events.length) {
    this.checkForSameInitiator();
    }
  },
  methods: {
    checkForSameInitiator: function() {
      let initiator = this.event.initiator;
      let i = 0;
      let newRelatedEvents= new Array<Object>();

      for (var [date_key, date] of Object.entries<any>(this.events)) {
        for (var [post_key, post] of Object.entries<any>(date["posts"])) {
          if (post["initiator"] == initiator && post["id"] != this.event.id) {
            i++;
            if (i <= 3) {
            newRelatedEvents.unshift(post);
            }
          }
        }
      }
      this.relatedEvents = newRelatedEvents;
    }
  }
});
</script>

<style scoped lang="css">


/* ==========================================================================
   Popup component styling
   ========================================================================== */


#popup {
  position: fixed;
  overflow-wrap: normal;
  overflow-x: hidden;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 60px 8px 60px;
  background-color: #fff;
}

.related {
  position: relative;
  float: left;
}

.img-container {
  position: relative;
  bottom: 0;
  width: 100%;
  height: 50%;
  margin: 10px 0 30px 0px;
  background-color: #eee;
  flex-grow: 1; 
}

.img-container img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center center;
}

.go-back {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 100;
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  border: 1px solid #000; 
  background-color: #fff; 
}

.go-back a:link  {
  display: block;
  width: 100%;
  height: 50px;
  text-align: center;
  text-decoration: none;
  line-height: 50px;
}
</style>