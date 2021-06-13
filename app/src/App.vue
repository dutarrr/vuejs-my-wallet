<template>
  <div>
    <div class="container">
      <header-app></header-app>
      <router-view></router-view>
      <footer-app></footer-app>
    </div>
  </div>
</template>

<script>
import Header from "./components/shared/header";
import Footer from "./components/shared/footer";
export default {
  name: "App",
  components: {
    headerApp: Header,
    footerApp: Footer,
  },
};
</script>

<style>
</style>
