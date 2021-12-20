import Vue from "vue";
import Router from "vue-router";

import Home from "@/components/Home";
import Login from "@/components/Login";
import Product from "@/components/Product";
import News from "@/components/News";
import About from "@/components/About";
import Leaving from "@/components/Leaving";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/product",
      name: "Product",
      component: Product
    },
    {
      path: "/news",
      name: "News",
      component: News
    },
    {
      path: "/about",
      name: "About",
      component: About
    },
    {
      path: "/Leaving",
      name: "Leaving",
      component: Leaving
    }
  ]
});
