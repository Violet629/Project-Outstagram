import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../src/components/LoginPage.vue"),
  },
  {
    path: "/singup-page",
    component: () => import("../src/components/SignupPage.vue"),
  },
  {
    path: "/home",
    component: () => import("../src/components/HomePage.vue"),
  },
  {
    path: "/fail",
    component: () => import("../src/components/LoginFail.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
