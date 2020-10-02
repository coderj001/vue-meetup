import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Meetups from "@/views/Meetup/Meetups.vue";
import Meetup from "@/views/Meetup/Meetup.vue";
import CreateMeetUp from "@/views/Meetup/CreateMeetUp.vue";
import Profile from "@/views/User/Profile.vue";
import SignIn from "@/views/User/SignIn.vue";
import SignUp from "@/views/User/SignUp.vue";
import AuthGuard from "./auth-guard.js";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/meetups",
    name: "Meetups",
    component: Meetups
  },
  {
    path: "/createmeetup",
    name: "CreateMeetUp",
    component: CreateMeetUp,
    beforeEnter: AuthGuard
  },
  {
    path: "/meetup/:id",
    name: "Meetup",
    component: Meetup
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile
  },
  {
    path: "/signin",
    name: "SignIn",
    component: SignIn
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
