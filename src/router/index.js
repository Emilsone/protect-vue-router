/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from "../views/Login.vue";
import Admin from "../views/Admin.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      requiresAuth: false,
    },
  },
 
  {
    path: "/login",
    name: "login",
    // eslint-disable-next-line no-undef
    component: Login,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/admin",
    name: "admin",
    // eslint-disable-next-line no-undef
    component: Admin,
    meta: {
      requiresAuth: true,
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})




router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    next("login");
  } else {
    next();
  }
});
export default router
