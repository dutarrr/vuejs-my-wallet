<template>
  <div>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
//import { mapGetters } from "vuex";
export default {
  components: {},
  computed: {},
  created() {},
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
