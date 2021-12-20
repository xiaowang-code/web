<template>
  <div class="about">
    <h1>{{ $store.state.aboutStore.ressage }}</h1>
  </div>
</template>

<script>
export default {
  name: "about",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.about {
  margin: 5em;
}
h1,
h2 {
  font-weight: normal;
}
</style>
