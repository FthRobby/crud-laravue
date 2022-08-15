import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/post",
      name: "post.index",
      component: () => import("@/views/post/Index.vue"),
    },
    {
      path: "/create",
      name: "post.create",
      component: () => import("@/views/post/Create.vue"),
    },
    {
      path: "/edit/:id",
      name: "post.edit",
      component: () => import("@/views/post/Edit.vue"),
    },
  ],
});

export default router;
