<template>
  <div class="card m-auto">
    <div class="card-header text-center">Döviz İşlemleri</div>
    <div class="card-body">
      <div class="mb-3 row">
        <label for="alisKuru" class="col-sm-2 col-form-label">Alış Kuru</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="alisKuru" />
        </div>
      </div>
      <div class="mb-3 row">
        <label for="satisKuru" class="col-sm-2 col-form-label"
          >Satış Kuru</label
        >
        <div class="col-sm-10">
          <input type="text" class="form-control" id="satisKuru" />
        </div>
      </div>
      <div class="mb-3 row">
        <label for="alisTl" class="col-sm-2 col-form-label">Alış TL</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="alisTl" />
        </div>
      </div>
      <div class="mb-3 row">
        <label for="satisTl" class="col-sm-2 col-form-label">Satış TL</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="satisTl" />
        </div>
      </div>
      <div class="mb-3 row">
        <label for="islemTip" class="col-sm-2 form-label">İşlem Tipi</label>
        <div class="col-sm-10">
          <select
            class="form-select"
            aria-label="Default select example"
            id="islemTip"
          >
            <option selected>Seçiniz..</option>
            <option value="1">Alış</option>
            <option value="2">Satış</option>
          </select>
        </div>
      </div>
      <div class="mb-3 row">
        <div class="col-sm-2">
          <button class="btn btn-primary" @click="add">Kaydet</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    add() {
      console.log("hi");
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