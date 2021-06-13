<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark mt-2">
    <div class="container-fluid">
      <a class="navbar-brand" href="/"
        ><img src="@/assets/images/wallet.jpeg" width="48" height="48"
      /></a>

      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <router-link to="/" tag="li" class="nav-item" active-class="active"
            ><a class="nav-link">Home</a></router-link
          >
          <router-link
            to="/currency"
            tag="li"
            class="nav-item"
            active-class="active"
            ><a class="nav-link">Döviz</a></router-link
          >
          <router-link
            to="/emtia"
            tag="li"
            class="nav-item"
            active-class="active"
            ><a class="nav-link">Emtia</a></router-link
          >
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
nav {
  border-radius: 10px;
  box-shadow: 3px 3px #999;
}
img {
  border-radius: 10px;
}
</style>>
