<template>
  <div id="app">
  <vHeader />
   <router-view></router-view>
  </div>
</template>

<script>

import vHeader from "@/components/v-header"

export default {
  name: 'App',
  components: {
    vHeader
  
  },
  data: function () {
    return {
 
    };
  },
  
 
 
  
}
</script>


