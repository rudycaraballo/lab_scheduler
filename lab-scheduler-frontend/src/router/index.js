import { createWebHistory, createRouter } from "vue-router";
import {jwtDecode} from 'jwt-decode';

// @ts-ignore
import Home from "../views/Home.vue";
import LogIn from "../views/LogIn.vue";
import Checkout from "../views/Checkout.vue";
import Account from "../views/Account.vue";
import Rooms from "../views/Rooms.vue";
import Success from "@/views/Success.vue";
import RoomDes from "../views/RoomDescription.vue";
import AdminDash from "../views/AdminDash.vue";
import SignUp from "../views/SignUp.vue";



const routes = [
  { path: "/", name: "home", component: Home },
  {
    path: "/login",
    name: "login",
    component: LogIn,
  },
  {
    path: "/sign-up",
    name: "sign-up",
    component: SignUp,
  },
  {
    path: "/account",
    name: "account",
    component: Account,
    meta: {
      requiresAuth: true,
      roles:['admin', 'user']
    }
  },
  {
    path: "/checkout/:rmNumCheckout/:buildingNameCheckout/:capacity/:date/:startTime/:endTime",
    name: "checkout",
    component: Checkout,
    props: true,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/admin",
    name: "admin",
    component: AdminDash,
    meta: {
      requiresAuth: true,
      roles: ['admin']
    }
  },
  { 
    path: "/success",
     name: "success", 
     component: Success 
  },
  { 
    path: "/rooms", name: "rooms", component: Rooms 
  },
  {
    path: "/room-desc/:rmNum/:buildingName",
    component: RoomDes,
    name: "room-desc",
    props: true,
  },
];


const router = createRouter({
  history: createWebHistory(),
  routes,
});

//Checking protected routes
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const token = localStorage.getItem('token');
  let user = null;

  if (token) {
      user = jwtDecode(token); // Decode token to get user data
  }

  if (requiresAuth && !token) {
      next('/login');
  } else if (to.meta.roles && (!user || !to.meta.roles.includes(user.role))) {
      next('/'); // Redirect if user does not have the required role
  } else {
      next();
  }
});


export default router;
