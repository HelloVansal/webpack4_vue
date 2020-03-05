import Vue from "vue";

import router from "./router"; // 路由
import store from "./store"; // 状态管理


const root = document.createElement('div') //创建div节点
document.body.appendChild(root) //将div节点添加到body下

import App from "App";
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount(root);