<template>
  <div id="app">
    <Menu></Menu>
    <router-view :events="events" :about="about" :time="time"/>
  </div>
</template>

<script lang="javascript">
import Vue from 'vue'
import Menu from '@/components/Menu.vue'
import axios from 'axios'
import moment from 'moment'

export default Vue.extend({
  name: 'App',
  components: {
    Menu
  },
  data() {
    return {
      about: '',
      events: [],
      time: moment().format('YYYYMMDDHHmm')
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
  /* font-family: 'Amiri', serif; */
  width:100%;
  height:100%;
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
  /* color: #2c3e50; */
}
/* #nav a.router-link-exact-active {
  color: #42b983;
} */

a:link,
a:visited {
  color: black;
  /* font-family: serif; */
}
</style>
