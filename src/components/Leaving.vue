<template>
  <div class="leaving">
    <span>欢迎留言</span>
    <b-form-textarea
      placeholder="请输入10个字符以上"
      v-model="text"
      debounce="500"
      rows="3"
      max-rows="5"
    ></b-form-textarea>
    <b-button block variant="primary" @click="send">发表</b-button>
    <b-button block variant="outline-danger" @click="clear">清空</b-button>
    <b-alert
      class="mt-3 mb-0"
      :show="divAlertTimeDown"
      fade
      variant="warning"
      @dismiss-count-down="countDivClose"
    >
      {{ alert }}
    </b-alert>
    <pre
      class="mt-3 mb-0"
      v-for="(item, index) in items"
      :key="index"
      v-text="$store.state.loginStore.uName + '：' + item"
    ></pre>
  </div>
</template>

<script>
export default {
  name: "leaving",
  data() {
    return {
      msg: "姓名",
      text: "",
      items: ["123", "456", "789"],
      divAlertTime: 1,
      divAlertTimeDown: 0,
      alert: ""
    };
  },
  methods: {
    send() {
      if (this.text == "") {
        this.divAlertTimeDown = this.divAlertTime;
        this.alert = "输入内容不能为空";
      } else if (this.text.length < 10) {
        this.divAlertTimeDown = this.divAlertTime;
        this.alert = "输入内容应超过10位";
      } else {
        this.items.push(this.text);
        this.text = "";
      }
    },
    countDivClose(divAlertTimeDown) {
      this.divAlertTimeDown = divAlertTimeDown;
    },
    clear() {
      this.text = "";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.leaving {
  margin: 2em;
  font-size: 2em;
}
</style>
