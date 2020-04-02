<template>
  <div id="about" v-html="about"></div>
</template>

<script lang="ts">
// @ is an alias to /src
import Vue from 'vue'

export default Vue.extend({
  name: 'About',
  props: ['about'],
});
</script>

<style scoped>
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
