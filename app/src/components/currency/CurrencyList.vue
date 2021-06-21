<template>
  <div class="text-center">
    <button @click="gotoAdd" class="btn btn-info">Yeni</button>
    <br />
    <br />
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Alış</th>
          <th scope="col">Satış</th>
          <th scope="col">Kar-Zarar</th>
          <th scope="col">Alış Kur</th>
          <th scope="col">Satış Kur</th>
          <!-- <th scope="col">İşlem Tipi</th> -->
          <th scope="col">Döviz Cinsi</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="currency in getAllCurrency"
          :key="currency.id"
          :class="currency.islemTip == 1 ? 'table-success' : 'table-warning'"
        >
          <th scope="row">{{ currency.id }}</th>
          <td>{{ currency.alisTl | tlFormat }}</td>
          <td>{{ currency.satisTl | tlFormat }}</td>
          <td>{{ (currency.alisTl - currency.satisTl) | tlFormat }}</td>

          <td>{{ currency.alisKur | kurFormat }}</td>
          <td>{{ currency.satisKur | kurFormat }}</td>
          <!-- <td>{{ currency.islemTip == 1 ? "Alış" : "Satış" }}</td> -->
          <td>{{ currency.currencyType == 1 ? "Dolar" : "Euro" }}</td>
        </tr>
      </tbody>
    </table>
    <!-- <p class="text-center" v-else>Herhangi bir kayıt bulunamadı..</p> -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  created() {},
  computed: {
    ...mapGetters(["getAllCurrency"]),
    // backgroundColor: function () {
    //   return "table-success";
    // },
  },
  methods: {
    gotoAdd() {
      this.$router.push({ path: "/currency/add" });
    },
  },
};
</script>
