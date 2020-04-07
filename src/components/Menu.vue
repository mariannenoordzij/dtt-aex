<template>
<div id="menu">
  <ul>
    <!-- <img src="aex-01.gif"/> -->
    <!-- <li>
      <p>new AEX Index</p>
    </li> -->
    <li>
    <router-link to="/">timetable</router-link>
    </li>
    <li>
    <router-link to="/archive">archive</router-link>
    </li>
    <li @click="reload()">
    <router-link to="/random">random</router-link>
    </li>
    <li>
      <router-link to="/add">+ add event</router-link>
    </li>
  </ul>
</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Menu',
  data() {
    return {
      click: false
    }
  },
  props: {
    // msg: String,
  },
  methods: {
    reload: function() {
      this.$emit("randomReload");
    }
  }
});
</script>

<style scoped>
img {
  /* position:absolute; */
  left:0;
  height:50px;
}

#menu {
  position: sticky;
  top: 0;
  /* background-color: white; */
  z-index:100;
}

ul {
  box-sizing:border-box;
  width:100%;
  padding: 5px;
}

ul li {
  /* width:30%; */
  display:inline-block;
  background-color: red;
  text-align: center;
  border-radius:25px;
  padding:12px;
  margin:3px;
  
}

@media only screen and (max-width: 340px) {
  ul li {

      font-size:16px;
      padding:9.5px;
  }
}
</style>