<template>
  <div id="footer">
    <p>Sitemap</p>
    <nav>
      <router-link v-for="route in $router.options.routes" :key="route.path" :to="route.path">
        <p>/{{ route.name }}</p>
        </router-link>
    </nav>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import router from '../router'

export default Vue.extend({
  name: 'Footer',
  data() {
    return {
    }
  },
  methods: {
  }
});
</script>

<style scoped>
div {
  margin-top:30px;
  width: 100%;
  padding:10px;
  bottom:0;
}

nav p {
  font-family: 'Kosugi', sans-serif;
}

</style>