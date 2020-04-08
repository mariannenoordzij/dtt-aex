<template>
  <div id="footer">
    <p>Sitemap</p>
    <nav>
      <router-link v-for="route in $router.options.routes" :key="route.path" :to="route.path">
        <p class="mono">/{{ route.name }}</p>
      </router-link>
    </nav>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import router from '../router'

export default Vue.extend({
  name: 'Footer'
});
</script>

<style scoped>
#footer {
  bottom: 0;
  width: 100%;
  padding: 10px;
  margin-top: 30px;
}
</style>