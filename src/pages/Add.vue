<template>
  <div id="add">
      <iframe src="https://dev.oort.network/new-aex/"></iframe>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import Vue from 'vue'

export default Vue.extend({
  name: 'Add',
});
</script>

<style scoped>
#add {
  position: fixed; 
  right: 0; 
  bottom: 0; 
  left: 0;
  top: 0;
  -webkit-overflow-scrolling: touch;
  overflow-y: scroll;
}

#add >>> iframe {
    
    width: 100%;
    height: 100%;
    outline: none;
    border:0;
}

</style>
