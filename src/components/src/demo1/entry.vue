<template>
  <div>
    <router-link to="/user/15">User 15</router-link>
    <router-link to="/user/16">User 16</router-link>
    <router-link to="/user/120">User 120</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
import router from "../../../router/demo1/index.js";
export default {
  data() {
    return {};
  },
  router
};
</script>
<style scoped>
</style>
