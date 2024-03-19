import { createWebHistory, createRouter } from "vue-router";

import Home from "../views/Home.vue";
import LogIn from "../views/LogIn.vue";
// @ts-ignore
import Booking from "../views/Booking.vue";
import Account from "../views/Account.vue";

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/login", name: "login", component: LogIn },
  { path: "/account", name: "account", component: Account },
  { path: "/booking", name: "booking", component: Booking },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
