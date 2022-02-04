<template>
  <div class="app-menu min-vh-100">
    <b-img src="../assets/logoBuu.png" width="80%" center></b-img>
    <b-nav vertical class="w-25">
      <b-nav-item to="/">Home</b-nav-item>
      <b-nav-item to="/about">About</b-nav-item>
    </b-nav>
  </div>
</template>
<script>
export default {}
</script>
<style>
.app-menu {
  background-color: gray;
  font-size: 10pt;
}
.nav-link {
  color: white;
}
.nav-link:hover {
  color: gold;
}
</style>
