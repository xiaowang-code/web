<template>
  <div class="header">
    <table width="100%" height="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td valign="middle" align="center">
          <span style="font-size: 2em;">
            Welcome <b-icon icon="github" variant="dark"></b-icon>
          </span>
          <div>
            <b-avatar
              href="javascript:void(0)"
              size="4em"
              class="align-baseline"
              v-if="$store.state.loginStore.showLoginName"
              style="width: 12%; border: 1px solid; border-image: linear-gradient(to left, rgba(0, 255, 255, 0), rgba(0, 255, 255, 0.8) 20%, rgba(255, 255, 0, 0.8) 80%, rgba(0, 255, 255, 0)) 1; margin-top: 10em; margin-bottom: 5em; color: #8F3985;"
            >
              {{ $store.state.loginStore.uName }}
            </b-avatar>
            <b-avatar
              href="javascript:void(0)"
              size="4em"
              class="align-baseline"
              @click="$store.commit('showDialog')"
              v-else
              style="width: 12%; border: 1px solid; border-image: linear-gradient(to left, rgba(0, 255, 255, 0), rgba(0, 255, 255, 0.8) 20%, rgba(255, 255, 0, 0.8) 80%, rgba(0, 255, 255, 0)) 1; margin-top: 10em; margin-bottom: 5em; color: #8F3985;"
            >
              Login
            </b-avatar>
          </div>
          <a @click="topnav">
            <b-icon
              icon="chevron-compact-down"
              animation="cylon-vertical"
              style="width: 80px; height: 80px; color: #fff"
            ></b-icon>
          </a>
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    topnav() {
      var topnav = $("#topnav").offset().top;
      $("html,body").animate(
        { scrollTop: topnav },
        { duration: 500, easing: "swing" }
      );
    }
  }
};
</script>
<style>
.header {
  font-size: 28px;
  text-align: center;
  height: 750px;
  background: url(../assets/header.jpg) no-repeat;
  background-size: 100% 100%;
  background-attachment: fixed;
}
</style>
