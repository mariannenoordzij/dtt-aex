<template>
<div>
  <DataItem v-if="events.length && randomEvent != null" :event="randomEvent" :events="events" :time="time"></DataItem>
  
</div>
</template>

<script lang="ts">
import Vue from 'vue'
import DataItem from '@/components/DataItem.vue'

export default Vue.extend({
  name: 'Random',
  props: ['about', 'events', 'time', 'reloadEvent', 'newRandom'],
  components: {
    DataItem
  },
  data() {
    return {
      randomEvent: null,
    }
  },
  mounted() {
    if (this.events.length) {
    this.pickRandomEvent();
    }
  },
  watch: { 
    events: function() { // watch it
      this.pickRandomEvent();
    },
    newRandom: function() { // watch it
      this.pickRandomEvent();
    }
  },
  methods: {
    pickRandomEvent() {
      let randomDate = this.$props.events[Math.floor(Math.random()*this.$props.events.length)];
      let randomEvent = randomDate.posts[Math.floor(Math.random()*randomDate.posts.length)];
      this.randomEvent = randomEvent;
    }
  }
});
</script>

<style scoped>
div {
  width:100%;
  height:100%;
}

#about {
  width:100%;
  height:100%;
  padding: 8px;
}

#about >>> p {
  white-space: pre-wrap;
  font-size:18px;
  margin-bottom: 1em;
}

#about >>> strong {
  font-weight: normal;
  font-size:18px;
  /* color:#7FD3FF; */
  font-family: 'Kosugi', sans-serif;
}
</style>
