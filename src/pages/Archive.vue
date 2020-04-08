<template>
  <div id="timetable">
    <div class="schedule-wrap" v-for="(item, key) in events.slice().reverse()" :item="item" :key="key">
      <div class="schedule" v-if="item.key < todayDateKey">
        <div class="date">{{todayDate === item.date ? 'Today' : tomorrowDate === item.date ? 'Tomorrow' : item.date  }}</div>
        <DataItem v-for="event in item.posts" :key="event.id" :event="event"></DataItem>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import moment from 'moment'
import DataItem from '@/components/DataItem.vue'

export default Vue.extend({
  name: 'Archive',
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
  props: ['events', 'time']
});
</script>

<style scoped lang="css">

/* ==========================================================================
   Archive page styling
   ========================================================================== */


#timetable {
  width: 100%;
}

.date {
  width: 100%;
  height: 35px;
  padding:5px;
  font-family: 'Kosugi', sans-serif;
  line-height: 30px;
}

.schedule-wrap {
  width: 100%;
}

.schedule {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
