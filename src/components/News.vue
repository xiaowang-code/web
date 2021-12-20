<template>
  <div class="news">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "news",
  data() {
    return {
      msg: "新闻页，敬请期待！"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.news {
  margin: 5em;
}
h1,
h2 {
  font-weight: normal;
}
</style>
