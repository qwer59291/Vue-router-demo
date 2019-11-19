<template>
  <div class="us">
    <h2>User Settings</h2>
    <UserSettingsNav />
    <router-view class="us__content" />
    <router-view name="helper" class="us__content us__content--helper" />
  </div>
</template>
<script>
import UserSettingsNav from "components/demo2/2/children/user-settings-nav.vue";

export default {
  data() {
    return {};
  },
  components: { UserSettingsNav }
};
</script>
<style scoped>
.us {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    "header header"
    "nav content"
    "nav helper";
}

h2 {
  grid-area: header;
}
</style>
