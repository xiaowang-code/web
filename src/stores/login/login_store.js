export default {
  state: {
    show: false,
    Dialog: false,
    showLoginName: false,
    uName: "默认用户",
    uPwd: ""
  },
  mutations: {
    showDialog(state) {
      state.Dialog = true;
    },
    closeDialog(state) {
      state.Dialog = false;
    },
    showLoginName(state) {
      state.showLoginName = true;
    },
    closeLoginName(state) {
      state.showLoginName = false;
      state.uName = "默认用户";
    }
  }
};
