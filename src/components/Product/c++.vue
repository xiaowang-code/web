<template>
  <div class="c">
    <b-card
      no-body
      class="overflow"
      style="max-width: 540px; margin-bottom: 1em;"
      v-for="index of listIndex"
      :key="index"
    >
      <b-row no-gutters>
        <b-col md="6">
          <b-card-img
            :src="require('../../assets/c.jpeg')"
            alt="Image"
          ></b-card-img>
        </b-col>
        <b-col md="6">
          <b-card-body :title="course[index]">
            <b-card-text>{{ title[index] }} </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      listIndex: 0,
      course: [""],
      title: [""]
    };
  },
  methods: {
    getcJson() {
      axios
        .get("../../../static/c.json")
        .then(response => {
          // console.log(response.data.list);
          for (let item of response.data.list) {
            this.course.push(item.course);
            this.title.push(item.title);
            this.listIndex++;
          }
        })
        .catch(function(err) {
          console.log("err");
        });
    }
  },
  mounted() {
    // 创建前调用 方法
    let that = this;
    that.getcJson();
  }
};
</script>
<style>
.c {
  margin: 1em;
}
</style>
