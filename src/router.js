/*
 * @Descripttion: 
 * @version: 
 * @Author: zhenzipu
 * @Date: 2019-11-06 10:34:08
 * @LastEditors: zhenzipu
 * @LastEditTime: 2020-11-20 18:50:59
 */
import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
const router = new Router({
  mode: "hash",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "index",
      redirect: "home",
      component: () => import("./App.vue")
    },
    {
      path: "/home",
      name: "home",
      meta: {
          title: '首页'
      },
      component: () => import("./views/home.vue")
    },
    {
      path: "/excelPreview",
      name: "excelPreview",
      meta: {
          title: '表格预览'
      },
      component: () => import("./views/excelPreview.vue")
    },
  ]
});
router.beforeEach((to, from, next) => {
  next();
});
export default router;
