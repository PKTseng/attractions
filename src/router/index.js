import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const scenicSpot = () => import("../views/scenicSpot")
const About = () => import("../views/About.vue")

const routes = [
  {
    path: "/",
    name: "scenicSpot",
    component: scenicSpot,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router
