import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const home = () => import("../views/home")

const scenicSpot = () => import("../views/scenicSpot.vue")
const scenicSpotList = () => import("../views/scenicSpot/index")
const scenicSpotDetail = () => import("../views/scenicSpot/detailInfo")

const About = () => import("../views/About.vue")

const routes = [
  {
    path: "/",
    name: "home",
    component: home,
  },
  {
    path: "/scenicSpot",
    component: scenicSpot,
    children: [
      {
        path: "list",
        name: "scenicSpotList",
        component: scenicSpotList,
      },
      {
        path: "detail/:id",
        name: "scenicSpotDetail",
        component: scenicSpotDetail,
      },
    ],
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
