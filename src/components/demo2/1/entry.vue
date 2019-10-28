<template>
  <!-- 命名视图 -->
  <div>
    <h1>Named Views</h1>
    <ul>
      <li>
        <router-link to="/">/</router-link>
      </li>
      <li>
        <router-link to="/other">/other</router-link>
      </li>
    </ul>
    <router-view class="view one"></router-view>
    <router-view class="view two" name="a"></router-view>
    <router-view class="view three" name="b"></router-view>
  </div>
</template>
<script>
import router from "router/demo2/index.js";
export default {
  data() {
    return {};
  },
  router
};
</script>
<style scoped>
</style>
