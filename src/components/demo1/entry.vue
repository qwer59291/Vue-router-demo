<template>
  <div>
    <!-- 命名路由 -->
    <router-link :to="{ name: 'user', params: { id: 123 }}">User 15</router-link> 
    <!-- 命名路由 -->
    <router-link to="/user/16">User 16</router-link>
    <router-link to="/user/120">User 120</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
import router from "router/demo1/index.js";
export default {
  data() {
    return {};
  },
  router
};
</script>
<style scoped>
</style>
