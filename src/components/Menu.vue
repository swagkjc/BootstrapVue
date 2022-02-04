<template>
  <div>
    <b-img src="../assets/logoBuu.png" width="80%" class="pt-2 pb-2"></b-img>
    <b-nav vertical>
      <b-nav-item to="/">Home</b-nav-item>
      <b-nav-item to="/about">About</b-nav-item>
      <b-nav-item @click="showFormInput = !showFormInput"
        >Form Input
        <b-icon
          :icon="showFormInput ? 'caret-down-fill' : 'caret-right-fill'"
        ></b-icon
      ></b-nav-item>
      <b-nav-item class="sub-menu" v-if="showFormInput" to="./formInput1"
        >Form Input 1</b-nav-item
      >
      <b-nav-item class="sub-menu" v-if="showFormInput" to="./formInput2"
        >Form Input 2</b-nav-item
      >
    </b-nav>
  </div>
</template>
<script>
export default {
  data () {
    return {
      showFormInput: false
    }
  }
}
</script>
<style>
.app-menu {
  background-color: gray;
  font-size: 10pt;
}
.nav-link {
  color: white;
  text-align: left;
}
.nav-link:hover {
  color: gold;
}
.sub-menu {
  padding-left: 10pt;
}
</style>
