<template>
  <div>
    <button @click="gotoAdd" class="btn btn-info">Yeni</button>
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">Alış TL</th>
          <th scope="col">Satış TL</th>
          <th scope="col">Alış Kur</th>
          <th scope="col">Satış Kur</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="currency in getAllCurrency" :key="currency.id">
          <th scope="row">{{ currency.id }}</th>
          <td>{{ currency.alisTl }}</td>
          <td>{{ currency.satisTl }}</td>
          <td>{{ currency.alisKur }}</td>
          <td>{{ currency.satisKur }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  created() {},
  computed: {
    ...mapGetters(["getAllCurrency"]),
  },
  methods: {
    gotoAdd() {
      this.$router.push({ path: "/currency-add" });
    },
  },
};
</script>
