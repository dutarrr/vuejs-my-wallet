<template>
  <div class="text-center">
    <table class="table table-dark table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Tutar</th>
          <th scope="col">Kur</th>
          <th scope="col">İşlem Tipi</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="emtia in getAllEmtiaList" :key="emtia.id">
          <th scope="row">{{ emtia.id }}</th>
          <td>{{ emtia.tutar | tlFormat }}</td>
          <td>{{ emtia.kur | kurFormat }}</td>
          <td>{{ emtia.islemTip == 1 ? "Alış" : "Satış" }}</td>
        </tr>
      </tbody>
    </table>
    <!-- <p class="text-center" v-else>Herhangi bir kayıt bulunamadı..</p> -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getAllEmtiaList"]),
  },
};
</script>