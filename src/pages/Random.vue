<template>
  <div>
    <!-- Data-Item displaying the random event which gets selected in the pickRandomEvent method -->
    <DataItem v-if="events.length && randomEvent != null" :event="randomEvent" :events="events" :time="time"></DataItem>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import DataItem from '@/components/DataItem.vue'

// The pickRandomEvent should only be called when the prop events is ready after loading the page.

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
    // newRandom event can be emitted by clicking on the Random button the Menu component
    newRandom: function() { 
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

<style scoped lang="css">


/* ==========================================================================
   Random event page styling
   ========================================================================== */


div {
  width:100%;
  height:100%;
}

#about {
  width:100%;
  height:100%;
  padding: 8px;
}

#about p {
  margin-bottom: 1em;
  white-space: pre-wrap;
  font-size:18px;
}

#about strong {
  font-weight: normal;
  font-size:18px;
  font-family: 'Kosugi', sans-serif;
}
</style>
