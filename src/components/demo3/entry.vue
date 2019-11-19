<template>
  <div>
    <router-link to="/a">aaa</router-link>
    <router-link to="/b">bbb</router-link>

    <router-view></router-view>
  </div>
</template>
<script>
import router from "router/demo3/index.js";

export default {
  data() {
    return {};
  },
  router
};
</script>
<style scoped>
</style>
