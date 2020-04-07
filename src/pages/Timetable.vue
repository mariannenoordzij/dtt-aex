<template>
  <div id="timetable">
    <div class="scheduleWrap" v-for="(item, key) in events" :item="item" :key="key">
      <div class="schedule" v-if="item.key >= todayDateKey">
        <div class="date">{{todayDate === item.date ? 'Today' : tomorrowDate === item.date ? 'Tomorrow' : item.date  }}</div>
        <DataItem v-for="event in item.posts" :key="event.id" :event="event" :events="events" :time="time"></DataItem>
      </div>
    </div>
    <router-view :event="currentItem" :events="events"></router-view>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import DataItem from '@/components/DataItem.vue'
import moment from 'moment'

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

<style scoped>
#timetable {
  width: 100%;
}

.date {
  font-family: 'Kosugi', sans-serif;
  text-transform: lowercase;
  position:relative;
  line-height: 53px;
  height:45px;
  width:100%;
  padding:5px;
}

.scheduleWrap{
  width: 100%;
  position: relative;
}

.schedule {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>