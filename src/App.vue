<template>
  <div id="app">
    <entry></entry>
  </div>
</template>

<script>
import Entry from './components/demo3/entry'
export default {
  name: "app",
  components: {
    Entry
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
