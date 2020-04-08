<template>
  <div id="app">
    <!-- Menu -->
    <Menu @randomReload="newRandomClick()"></Menu>
    <!-- Router Pages -->
    <router-view :events="events" :time="time" :newRandom="newRandom"/>
    <!-- Footer -->
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Menu from '@/components/Menu.vue'
import axios from 'axios'
import moment from 'moment'
import Footer from '@/components/Footer.vue'

// In "data" I store the [array] with date {objects} which have an [array] of events sorted by starting time. 
// In "time" I make a moment.js object Moment to save the current time and compare it to the event entries later.
// "newRandom" is a counter with which an event is emmitted in Random.vue to pick a new event.
// In the mounted cycle axios fetches the data from the API.

export default Vue.extend({
  name: 'App',
  components: {
    Menu, Footer
  },
  data() {
    return {
      events: [],
      time: moment().format('YYYYMMDDHHmm'),
      newRandom: 0
    }
  },
  mounted() {
    var self = this;
    axios
    .get('https://dev.oort.network/new-aex/wp-json/api/main')
    .then(response => {
      self.events = response.data.events;
    })
    .catch(error => {
      console.log(error)
    })
    setInterval(() => {
      this.time = moment().format('YYYYMMDDHHmm')
    }, 1000);
  },
  methods: {
    newRandomClick: function() {
      this.newRandom += 1;
    }
  }
});
</script>

<style lang="css">

/* ==========================================================================
   Global style
   ========================================================================== */


* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

#app {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
  width: 100vw;
  height: 100vh;
  background-color: #eee;
}

p,
span,
li,
h1, 
h2,
h3,
.go-back a:link {
  font-family: Helvetica, Arial, sans-serif;
  font-size: 18px;
  font-weight: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#footer p,
.mono {
  font-family: 'Kosugi', sans-serif;
}

a:link,
a:visited {
  color: #000;
}

@media only screen and (max-width: 800px) {
  .data_item {
    font-size:16px;
  }

  .data_item p,
  .data_item span,
  .data_item li,
  .data_item h1, 
  .data_item h2,
  .data_item h3
  {
    overflow: hidden;
    line-height:1.1;
    word-spacing: -1px;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
</style>
