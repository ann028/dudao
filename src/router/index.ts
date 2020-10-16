import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import DefaultIndex from '@/components/DefaultIndex.vue'

Vue.use(VueRouter)

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/about',
    children: [
      {
        path: 'about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
      },
      {
        path: 'project',
        name: 'project',
        component: () => import(/* webpackChunkName: "project" */ '../views/Project.vue'),
      },
      {
        path: 'notice',
        name: 'notice',
        component: DefaultIndex,
        redirect: '/workNotice',
        children: [
          {
            path: '/workNotice',
            name: 'workNotice',
            component: () => import('../views/Notice/WorkNotice.vue'),
          },
          {
            path: '/workMessage',
            name: 'workMessage',
            component: () => import('../views/Notice/WorkMessage.vue'),
          },
          {
            path: '/addWorkMessage',
            name: 'addWorkMessage',
            component: () => import('../views/Notice/AddWorkMessage.vue'),
          },
        ],
      },
      {
        path: 'matter',
        name: 'matter',
        component: DefaultIndex,
        redirect: '/majorMatter',
        children: [
          {
            path: '/majorMatter',
            name: 'majorMatter',
            component: () => import('../views/MajorMatter/MajorMatter.vue'),
          },
        ],
      },
      {
        path: 'examine',
        name: 'examine',
        component: DefaultIndex,
        redirect: '/examineManage',
        children: [
          {
            path: '/examineManage',
            name: 'examineManage',
            component: () => import('../views/Examine/ExamineManage.vue'),
          },
        ],
      },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
