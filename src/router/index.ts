import Vue from 'vue'
import VueRouter from 'vue-router'
import Timetable from '../pages/Timetable.vue'
import Random from '../pages/Random.vue'
import Add from '../pages/Add.vue'
import Archive from '../pages/Archive.vue'
import Popup from '../components/Popup.vue'

Vue.use(VueRouter)

// Router routes configuration

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
        props: { type: 'timetable'}
      },
    ]
  },
  {
    path: '/random',
    name: 'Random',
    component: Random,
    props: true,
    children: [
      {
        path: '/event/:id',
        component: Popup,
        props: { type: 'random'}
      },
    ]
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
        path: '/event/:id',
        component: Popup,
        props: { type: 'archive'}
      },
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router