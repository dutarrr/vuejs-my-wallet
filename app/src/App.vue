<template>
  <div>
    <div class="container">
      <header-app></header-app>
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
