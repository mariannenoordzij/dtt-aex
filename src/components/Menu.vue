<template>
<div id="menu">
  <ul>
    <!-- Router links -->
    <li>
      <router-link to="/">timetable</router-link>
    </li>
    <li>
      <router-link to="/archive">archive</router-link>
    </li>
    <!-- Event which triggers the selection of a new random event on the Random-page -->
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
  methods: {
    reload: function() {
      this.$emit("randomReload");
    }
  }
});
</script>

<style scoped lang="css">

/* ==========================================================================
   Menu component styling
   ========================================================================== */


img {
  left: 0;
  height: 50px;
}

#menu {
  position: sticky;
  top: 0;
  z-index:100;
}

ul {
  box-sizing: border-box;
  width: 100%;
  padding: 5px;
}

ul li {
  display: inline-block;
  padding: 12px;
  margin: 3px;
  border-radius: 25px;
  text-align: center;
  background-color: #f00;
}

@media only screen and (max-width: 340px) {
  ul li {
    padding: 9.5px;
    font-size: 16px;
  }
}
</style>