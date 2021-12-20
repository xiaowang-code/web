<template>
  <div class="topnav" id="topnav">
    <ul>
      <li><a href="/">小王日记</a></li>
      <li>
        <router-link :to="'/'" class="dropbtn-nav">首页</router-link>
      </li>
      <li class="dropdown-nav">
        <router-link :to="'/product'" class="dropbtn-nav">产品</router-link>
        <div class="dropdown-content-nav">
          <router-link :to="'/product1'">产品1</router-link>
          <router-link :to="'/product2'">产品2</router-link>
        </div>
      </li>
      <li class="dropdown-nav">
        <router-link :to="'/news'" class="dropbtn-nav">新闻</router-link>
        <div class="dropdown-content-nav">
          <router-link :to="'/new1'">新闻1</router-link>
          <router-link :to="'/new2'">新闻2</router-link>
        </div>
      </li>
      <li>
        <router-link :to="'/about'">关于</router-link>
      </li>
      <li>
        <router-link :to="'/leaving'">留言</router-link>
      </li>
      <li class="dropdown-nav" v-if="$store.state.loginStore.showLoginName">
        <router-link :to="''" class="dropbtn-nav">
          &nbsp;&nbsp;&nbsp; 欢迎：{{ $store.state.loginStore.uName }}
          &nbsp;&nbsp;&nbsp;
        </router-link>
        <div class="dropdown-content-nav">
          <router-link :to="''" @click.native="$store.commit('closeLoginName')">
            退出登录
          </router-link>
        </div>
      </li>
      <li v-else>
        <router-link :to="''" @click.native="$store.commit('showDialog')">
          登录
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>
<style>
.topnav {
  position: sticky;
  top: 0px;
  z-index: 1;
}
.topnav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}
.topnav ul li {
  float: left;
}
.topnav ul li:last-child {
  float: right;
}
.topnav a {
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}
/* 改变鼠标悬停时的颜色 */
.topnav a:hover {
  background-color: #ddd !important;
  color: black !important;
}
/* 下拉内容（默认隐藏） */
.dropdown-content-nav {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
}
/* 下拉链接 */
.dropdown-content-nav a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}
/* 悬停时更改下拉链接的颜色 */
.dropdown-content-nav a:hover {
  background-color: #f1f1f1;
}
/* 悬停时显示下拉菜单 */
.dropdown-nav:hover .dropdown-content-nav {
  display: block;
}
/* 显示下拉内容时，更改下拉按钮的背景颜色 */
.dropdown-nav:hover .dropbtn-nav {
  background-color: #258ab3;
}
/* 响应式布局 - 当屏幕的宽度小于 620 像素时，使导航链接堆叠而不是并排 */
@media screen and (max-width: 620px) {
  .topnav ul li {
    float: none;
    width: 100%;
  }
  .dropdown-content-nav {
    width: 100%;
  }
}
</style>
