<template>
  <div id="app">
    <Menu @randomReload="newRandomClick()"></Menu>
    <router-view :events="events" :about="about" :time="time" :newRandom="newRandom"/>
    <Footer></Footer>
  </div>
</template>

<script lang="javascript">
import Vue from 'vue'
import Menu from '@/components/Menu.vue'
import axios from 'axios'
import moment from 'moment'
import Footer from '@/components/Footer.vue'

export default Vue.extend({
  name: 'App',
  components: {
    Menu, Footer
  },
  data() {
    return {
      about: '',
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
      self.about = response.data.about;
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

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  width:100vw;
  height:100vh;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 18px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
  background-color: #eeeeee;
}

a:link,
a:visited {
  color: black;
}
</style>
