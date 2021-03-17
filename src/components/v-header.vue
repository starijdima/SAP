<template>
  <div>
  <div class="header">
  <img class="header-logo" v-bind:src="gsBlack" alt />

  </div>
  </div>
</template>
<script>
import gsBlack from "@/assets/logo.svg";
import backArrow from "@/assets/back-arrow.svg";
export default {
  name: "v-header",
  components: {},
   data: function () {
    return {
     gsBlack,
     backArrow
    };
  },
};
</script> 