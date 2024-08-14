import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes: RouteRecordRaw[] = [
  // 这里也可以不写(直接在路由拦截中查看是否有token, 决定去到登录页面, 还是自己有的页面)
  {
    path: '/',
    // 跳转到首页 /home
    // 路由拦截中判断有没有token(store)
    //  > next
    //  > next("/login")
    redirect: '/main'
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('../views/login/login.vue'),
    meta: {}
  },
  {
    name: 'main',
    path: '/main',
    redirect: '/main/analysis/overview',
    component: () => import('/@/views/main/main.vue'),
    children: [
      // analysis
      {
        path: 'analysis/overview',
        name: 'overview',
        component: () => import('/@/views/main/analysis/overview/overview.vue')
      },
      {
        path: 'analysis/dashboard',
        name: 'dashboard',
        component: () => import('/@/views/main/analysis/dashboard/dashboard.vue')
      },

      // system
      {
        path: 'system/user',
        name: 'user',
        component: () => import('../views/main/system/user/user.vue')
      },
      {
        path: 'system/role',
        name: 'role',
        component: () => import('/@/views/main/system/role/role.vue')
      },
      {
        path: 'system/department',
        name: 'department',
        component: () => import('/@/views/main/system/department/department.vue')
      },
      {
        path: 'system/menu',
        name: 'menu',
        component: () => import('/@/views/main/system/menu/menu.vue')
      },

      // product
      {
        path: 'product/goods',
        name: 'goods',
        component: () => import('/@/views/main/product/goods/goods.vue')
      },
      {
        path: 'product/category',
        name: 'category',
        component: () => import('/@/views/main/product/category/category.vue')
      },

      // story
      {
        path: 'story/chat',
        name: 'chat',
        component: () => import('/@/views/main/story/chat/chat.vue')
      },
      {
        path: 'story/list',
        name: 'list',
        component: () => import('/@/views/main/story/list/list.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
