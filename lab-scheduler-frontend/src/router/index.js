import { createWebHistory, createRouter } from "vue-router";

import Home from "../views/Home.vue";
import LogIn from "../views/LogIn.vue";
// @ts-ignore
import Checkout from "../views/Checkout.vue";
import Account from "../views/Account.vue";
import Test from "../views/Test.vue";
import About from "../views/About.vue";
import Rooms from "../views/Rooms.vue";
import Faqs from "../views/FAQS.vue";
import Success from "@/views/Success.vue";
import RoomDes from "../views/RoomDescription.vue"
// @ts-ignore
import Dashboard from "../components/pages/Dashboard.vue";
// import Rooms from "../views/Rooms.vue";

const routes = [
  { path: "/", 
    name: "home", 
    component: Home 
  },
  {
    path: "/login",
    name: "login", 
    component: LogIn 
  },
  { 
    path: "/account", 
    name: "account", 
    component: Account, 
    // meta: {
    //   requiresAuth: true
    // }
  },
  { path: "/checkout", 
    name: "checkout", 
    component: Checkout,
    // meta: {
    //   requiresAuth: true
    // } 
  },
  { path: "/success", 
  name: "success", 
  component: Success 
  },
  { path: "/about", 
    name: "about", 
    component: About 
  },
  { path: "/rooms", 
    name: "rooms", 
    component: Rooms 
  },
  {
    path:"/faqs",
    component: Faqs,
    name: "faqs"
  },
  {
    path:"/room-desc",
    component: RoomDes,
    name: "room-desc"
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
