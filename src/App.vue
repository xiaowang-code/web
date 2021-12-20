<template>
  <div id="app">
    <Header></Header>
    <Login v-if="$store.state.loginStore.Dialog"></Login>
    <Topnav></Topnav>
    <router-view />
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Topnav from "./components/Topnav.vue";
import Footer from "./components/Footer.vue";
import Login from "./components/Login.vue";
export default {
  name: "App",
  components: {
    Header,
    Topnav,
    Footer,
    Login
  }
};
</script>

<style></style>
