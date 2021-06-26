<template>
  <div class="container">
    <emtia-add />
    <hr />
    <emtia-list />
  </div>
</template>

<script>
import EmtiaAddForm from "../components/emtia/EmtiaAdd.vue";
import EmtiaList from "../components/emtia/EmtiaList.vue";
export default {
  components: {
    emtiaAdd: EmtiaAddForm,
    emtiaList: EmtiaList,
  },
  created() {},
};
</script>