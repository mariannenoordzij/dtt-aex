import Vue from 'vue'
import VueRouter from 'vue-router'
import Timetable from '../pages/Timetable.vue'
import About from '../pages/About.vue'
import Add from '../pages/Add.vue'
import Archive from '../pages/Archive.vue'
import Popup from '../components/Popup.vue'
import { sitemapMiddleware } from '../sitemapMiddleware'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Timetable',
    component: Timetable,
    props: true,
    children: [
      {
        path: '/event/:id',
        component: Popup,
      },
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    props: true
  },
  {
    path: '/add',
    name: 'Add',
    component: Add,
    props: true
  },
  {
    path: '/archive',
    name: 'Archive',
    component: Archive,
    props: true,
    children: [
      {
        path: '/archive/event/:id',
        component: Popup,
      },
    ]
  }

]

const router = new VueRouter({
  routes
})

export default router