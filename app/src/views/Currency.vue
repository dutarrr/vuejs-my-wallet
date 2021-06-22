<template>
  <div>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style>
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.5s ease-out;
}
/* .fade-leave {
} */
.fade-leave-active {
  transition: opacity 0.5s ease-out;
  opacity: 0;
}
</style>
