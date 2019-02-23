// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import Element from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Element, { size: "small", zIndex: 3000 });
Vue.config.productionTip = false;
//import store from "./vuex/store";
//import Vuex from "vuex";
//import "./utils/axios"
//Vue.use(Vuex);
import VueRouter from "vue-router";
import routes from "./routes";
Vue.use(VueRouter);

const router = new VueRouter({
  routes
});
router.beforeEach((to, from, next) => {
  //NProgress.start();
  console.log(to)
  if (to.path == "/login") {
    sessionStorage.removeItem("token");
  }
  let token = sessionStorage.getItem("token");
  console.log(token)
  if (!token && to.path != "/login") {
    window.location.reload();
     console.log(to);
    next({
      path: "/login"
    });
  } else {
    next();
  }
  next();
});
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
