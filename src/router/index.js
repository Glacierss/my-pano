import Vue from 'vue'
import VueRouter from 'vue-router'
import Roaming from '../views/Roaming.vue'
import Welcome from '../views/Welcome.vue'
import Video from '../views/Video.vue'
import Contact from '../views/Contact.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Preview from '../views/Preview.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'welcome'  //重定向到welcome页
  },
  {
    path: '/welcome',
    name: 'welcome',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/Welcome.vue')
    component: Welcome
  },
  {
    path:'/roaming',
    name:'roaming',
    component:Roaming
  },
  {
    path:'/video',
    name:'video',
    component:Video
  },
  {
    path:'/contact',
    name:'contact',
    component:Contact
  },
  {
    path:'/login',
    name:'login',
    component:Login
  },
  {
    path:'/register',
    name:'register',
    component:Register
  },
  {
    path:'/preview',
    name:'preview',
    component:Preview
  }
]

const router = new VueRouter({
  routes
})

export default router
