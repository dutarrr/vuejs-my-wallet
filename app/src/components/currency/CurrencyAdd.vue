<template>
  <div class="card m-auto">
    <div class="card-header text-center">Döviz İşlemleri</div>
    <div class="card-body">
      <div class="mb-3 row">
        <label for="alisKur" class="col-sm-2 col-form-label">Kur</label>
        <div class="col-sm-10">
          <input
            type="number"
            class="form-control"
            id="alisKur"
            v-model="currency.kur"
          />
        </div>
      </div>
      <div class="mb-3 row">
        <label for="tutar" class="col-sm-2 col-form-label">Tutar</label>
        <div class="col-sm-10">
          <input
            type="number"
            class="form-control"
            id="tutar"
            v-model="currency.tutar"
          />
        </div>
      </div>
      <div class="mb-3 row">
        <label for="islemTip" class="col-sm-2 form-label">İşlem Tipi</label>
        <div class="col-sm-5">
          <select
            class="form-select"
            aria-label="Default select example"
            id="islemTip"
            v-model="currency.islemTip"
          >
            <option value="0" selected>Seçiniz..</option>
            <option value="1">Alış</option>
            <option value="2">Satış</option>
          </select>
        </div>
      </div>
      <div class="mb-3 row">
        <label for="islemTip" class="col-sm-2 form-label">Döviz Tipi</label>
        <div class="col-sm-5">
          <select
            class="form-select"
            aria-label="Default select example"
            id="islemTip"
            v-model="currency.currencyType"
          >
            <option value="0">Seçiniz..</option>
            <option value="1">Dolar | $</option>
            <option value="2">Euro | E</option>
          </select>
        </div>
      </div>
      <div class="mb-3 row">
        <div class="col-sm-2"></div>
        <div class="col-sm-2">
          <button class="btn btn-primary" @click="add">Kaydet</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currency: {
        kur: null,
        tutar: null,
        islemTip: "0",
        currencyType: "0",
      },
    };
  },
  methods: {
    add() {
      this.$store.dispatch("addCurrency", this.currency);
    },
  },
};
</script>

<style>
.card {
  width: 70%;
  box-shadow: 3px 3px #ddd;
}
</style>