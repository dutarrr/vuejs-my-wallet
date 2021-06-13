<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark mt-2">
    <div class="container-fluid">
      <a class="navbar-brand" href="/"
        ><img src="@/assets/images/wallet.jpeg" width="48" height="48"
      /></a>

      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link
              to="/"
              exact
              tag="a"
              class="nav-link"
              active-class="active"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              to="/currency"
              exact
              tag="a"
              class="nav-link"
              active-class="active"
              >Döviz</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              to="/emtia"
              exact
              tag="li"
              class="nav-link"
              active-class="active"
              >Emtia</router-link
            >
          </li>
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
