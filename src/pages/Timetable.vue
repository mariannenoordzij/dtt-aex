<template>
  <div id="timetable">
    <!-- For every date in array "events": -->
    <div class="schedule-wrap" v-for="(item, key) in events" :item="item" :key="key">
      <!-- If the entry is not from yesterday or earlier: -->
      <div class="schedule" v-if="item.key >= todayDateKey">
        <!-- Make custom printed text if the current date in the loop is Today and Tomorrow -->
        <div class="date">{{ todayDate === item.date ? 'Today' : tomorrowDate === item.date ? 'Tomorrow' : item.date  }}</div>
        <!-- Render all events in the list of the current date in the loop -->
        <DataItem v-for="event in item.posts" :key="event.id" :event="event" :events="events" :time="time"></DataItem>
      </div>
    </div>
    <!-- Necessary data to Router-view for rendering the Popup page -->
    <router-view :event="currentItem" :events="events"></router-view>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import DataItem from '@/components/DataItem.vue'
import moment from 'moment'

// In data() all relevant data objects are stored which are used to compare in the DataItem wrapper.

export default Vue.extend({
  name: 'Timetable',
  data() {
    return {
      currentItem: {},
      todayDateKey: moment().format('YYYYMMDD'),
      todayDate: moment().format('DD-MM-YYYY'),
      tomorrowDate: moment().add(1, 'days').format('DD-MM-YYYY')
    }
  },
  components: {
    DataItem
  },
  props: ['events', 'time'],
  mounted() {
    this.checkCurrentItem();
  },
  beforeUpdate() {
    this.checkCurrentItem();
  },
  methods: {

    checkCurrentItem() {
      let events = this.events;
      for (let index = 0; index < events.length; index++) {
        const element = events[index];
        for (let indexEvent = 0; indexEvent < element.posts.length; indexEvent++) {
          const event = element.posts[indexEvent];
          if(event.id === parseInt(this.$route.params.id)){
            this.currentItem = event;
          }
        }
      }
    },
  },
});
</script>

<style scoped lang="css">


/* ==========================================================================
   Timetable (home) page styling
   ========================================================================== */


#timetable {
  width: 100%;
}

.date {
  position: relative;
  width: 100%;
  height: 45px;
  padding: 5px;
  font-family: 'Kosugi', sans-serif;
  text-transform: lowercase;
  line-height: 53px;
}

.schedule-wrap{
  position: relative;
  width: 100%;
}

.schedule {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>