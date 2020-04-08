<template>
  <div id="add">
    <!-- Iframe to the backend submission form (not relevant for this test, but essential part of new AEX) -->
    <iframe src="https://dev.oort.network/new-aex/"></iframe>
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
  position: fixed; 
  right: 0; 
  bottom: 0; 
  left: 0;
  top: 0;
  -webkit-overflow-scrolling: touch;
  overflow-y: scroll;
}

#add iframe {
  width: 100%;
  height: 100%;
  border: 0;
  outline: none;
}
</style>
