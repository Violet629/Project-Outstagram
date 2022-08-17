import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/test",
    component: () => import("../src/components/MainPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
