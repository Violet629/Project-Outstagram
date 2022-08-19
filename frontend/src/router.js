import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../src/components/LoginPage.vue"),
  },
  {
    path: "/singup_page",
    component: () => import("../src/components/SignupPage.vue"),
  },
  {
    path: "/singup_complete",
    component: () => import("../src/components/SignupComplete.vue"),
  },
  {
    path: "/fail",
    component: () => import("../src/components/LoginFail.vue"),
  },
  {
    path: "/login_request",
    component: () => import("../src/components/LoginRequest.vue"),
  },
  {
    path: "/home",
    component: () => import("../src/components/HomePage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
