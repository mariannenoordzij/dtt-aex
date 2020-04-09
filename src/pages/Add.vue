<template>
  <div id="add">
    <!-- Iframe to the backend submission form (not relevant for this test, but essential part of new AEX) -->
    <iframe src="https://newaex.com/admin/"></iframe>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Add'
});
</script>

<style scoped lang="css">


/* ==========================================================================
   Add page styling
   ========================================================================== */


#add {
  position: absolute; 
  right: 0; 
  bottom: 0; 
  left: 0;
  top: 0;
}

#add iframe {
  width: 100%;
  height: 180%;
  border: 0;
  outline: none;
}
</style>
