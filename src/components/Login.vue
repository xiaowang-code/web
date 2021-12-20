<template>
  <div class="login" id="dialog">
    <div class="border">
      <b-icon
        icon="x-square"
        variant="dark"
        class="closeImg"
        @click="$store.commit('closeDialog')"
        animation="spin"
        font-scale="4"
      ></b-icon>
      <table border="1" class="border_login">
        <tr>
          <td style="width: 150px">用户名：</td>
          <td>
            <input type="text" style="width: 240px" v-model="uName" />
          </td>
        </tr>
        <tr>
          <td style="width: 150px">密码：</td>
          <td>
            <input
              type="password"
              style="width: 240px"
              v-model="uPwd"
              @keyup.enter="cBtn"
            />
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <input
              type="button"
              value="登录"
              style="width: 240px"
              @click="cBtn"
            />
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  name: "",
  data() {
    return {
      uName: "",
      uPwd: ""
    };
  },
  methods: {
    cBtn() {
      // json 文件只能放在static中
      axios
        .get("../static/data.json")
        .then(response => {
          for (let item of response.data.login) {
            if (item.name == this.uName && item.pwd == this.uPwd) {
              alert("登陆成功！");
              this.$store.state.loginStore.uName = this.uName;
              this.$store.commit("closeDialog");
              this.$store.commit("showLoginName");
              return;
            }
          }
          alert("登录失败，请检查账号和密码。");
        })
        .catch(function(err) {
          console.log("err");
        });
    }
  }
};
</script>

<style scoped>
#dialog {
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
  z-index: 3;
}
.message {
  text-align: center;
  position: absolute;
  top: 50%;
}
.closeImg {
  width: 20px;
  height: 20px;
  float: right;
  margin-right: 5px;
  margin-top: 5px;
  cursor: pointer;
  background-size: cover;
  background-repeat: no-repeat;
  /* background: url(x-square); */
}
.border {
  text-align: center;
  background-color: white;
  border-radius: 20px;
  width: 50%;
  height: 50%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.border_login {
  border: 0px;
  text-align: center;
  /* background-color: rgb(32, 226, 194); */
  border-radius: 20px;
  width: 90%;
  height: 90%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
