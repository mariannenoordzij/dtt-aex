<template>
  <div id="popup">
    <p>{{ event.name }}</p>
    <p>{{ event.time_start }} CET</p>
    <p v-if="event.initiator">by {{ event.initiator }}</p>
    <p>location: <a target="_blank" v-bind:href="event.streaming">{{ event.streaming }}</a></p>
    <p v-if="event.donate">donation link: <a target="_blank" v-bind:href="event.donate">{{ event.donate }}</a></p>
    <div v-if="event.description"><br><div v-html="event.description"></div></div>
    <br>
    <p>related events:</p>
    <div id="relatedWrap">
    
    <br><DataItem class="related" v-for="(event, key) in relatedEvents" :event="event" :key="key"></DataItem>
    </div>

     <img v-if="event.image" :src="event.image.url"/>
    <div class="footer">
      <router-link :to="(type == 'archive') ? '/archive' : ((type == 'timetable') ? '/' : '/random') " class="footer_back">back</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import DataItem from '@/components/DataItem.vue'

export default Vue.extend({
  name: 'Popup',
  props: ['event', 'type', 'events'],
  components: {
    DataItem
  },
  data() {
    return {
      relatedEvents: new Array<Object>(),
      ready: false
    }
  },
  mounted() {
    if (this.events.length) {
    this.checkForSameInitiator();
    }
  },
  beforeUpdate() {
    if (this.events.length) {
    this.checkForSameInitiator();
    }
  },
  watch: { 
    events: function() { // watch it
      this.checkForSameInitiator();
    }
  },
  methods: {
    checkForSameInitiator: function() {
      let initiator = this.event.initiator;
      // let currentId = this.event.id;
      let i = 0;
      let newRelatedEvents= new Array<Object>();

      for (var [date_key, date] of Object.entries<any>(this.events)) {
        for (var [post_key, post] of Object.entries<any>(date["posts"])) {
          if (post["initiator"] == initiator && post["id"] != this.event.id) {
            i++;
            window.console.log(initiator);
            if (i <= 3) {
            newRelatedEvents.unshift(post);
            }
          }
        }
      }
      this.relatedEvents = newRelatedEvents;
      this.ready = true;
    }
  }
});
</script>

<style scoped>
.related {
  position:relative;
  float:left;
}

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
  margin-top:30px;
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



@media only screen and (max-width: 800px) {

}
</style>