<template>
  <div class="user">
    <h2>User {{ $route.params.id }}</h2>
    <router-link :to="foo">foo</router-link>
    <router-link :to="bar">bar</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    foo() {
      return `/user/${this.$route.params.id}/foo/16`;
    },
    bar() {
      return `/user/${this.$route.params.id}/bar/17`;
    }
  }
};
</script>
<style scoped>
</style>
