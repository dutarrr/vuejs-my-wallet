<template>
  <div>
    <div class="container">
      <header-app></header-app>
      <div class="container mt-4 mb-4"><router-view></router-view></div>

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
