import { createRouter, createWebHashHistory } from "vue-router";

import SingInPage from "./views/SignInPage.vue";
import SingUpPage from "./views/SignUpPage.vue";
import HomePage from "./views/HomePage.vue";

const routes = [
  { path: "/", component: SingInPage },
  { path: "/signup", component: SingUpPage },
  { path: "/home", component: HomePage },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
