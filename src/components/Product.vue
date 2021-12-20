<template>
  <div class="product">
    <!-- <h1>{{ $store.state.productStore.msg }}</h1> -->
    <!-- <b-row>
      <b-col cols="3">
        123
      </b-col>
      <b-col cols="9">
        <C></C>
      </b-col>
    </b-row> -->
    <b-card>
      <b-tabs big justified pills>
        <b-tab
          v-for="(item, index) in $store.state.productStore.subjectItems"
          :key="index"
          :title="item.grade"
          lazy
        >
          <b-card style="margin-top: 1em;" no-body>
            <b-tabs content-class="mt-3" small justified card>
              <b-tab
                v-for="(sonItem, sonIndex) in item.subject"
                :key="sonIndex"
                :title="sonItem.course"
                lazy
              >
                <components :is="sonItem.sub"></components>
              </b-tab>
            </b-tabs>
          </b-card>
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
import C from "../components/Product/c++.vue";
import Java from "../components/Product/java.vue";
export default {
  name: "product",
  data() {
    return {};
  },
  components: {
    C,
    Java
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.product {
  margin: 5em;
}
</style>
