<template>
  <div>
    <div class="container">
      <header-app></header-app>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from "./components/header.vue";
export default {
  name: "App",
  components: {
    headerApp: Header,
  },
};
</script>

<style>
</style>
