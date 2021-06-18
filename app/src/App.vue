<template>
  <div>
    <div class="container">
      <header-app></header-app>
      <div class="container mt-4 mb-4">
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>

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
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.5s ease-out;
}
.fade-leave {
}
.fade-leave-active {
  transition: opacity 0.5s ease-out;
  opacity: 0;
}
</style>
