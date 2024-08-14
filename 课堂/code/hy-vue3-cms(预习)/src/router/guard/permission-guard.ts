import type { Router, RouteRecordRaw } from 'vue-router'
import { useUserStore } from '/@/store/modules/user'
import { getFirstMenuPath } from '../../utils/menu'
import localCahce from '/@/utils/cache'
import { TOKEN_KEY } from '/@/constants/cache_keys'
/**
 * 路由守卫 - 监听授权页面的授权
 * @param router 路由对象
 */
export const createPermissionGuard = (router: Router): void => {
  router.beforeEach((to, from, next) => {
    // login page
    if (to.path !== '/login') {
      const token = localCahce.getCache(TOKEN_KEY)
      // is login
      if (!token || token === 'undefined') {
        next('/login')
        return
      }
    }

    const userStore = useUserStore()
    // main page
    if (to.path === '/') {
      // redirect to path
      const userMenus = userStore.getUserMenus
      // 跳转到第一个菜单
      const firstMenuPath = getFirstMenuPath(userMenus)
      next(firstMenuPath)
    } else {
      next()
    }
  })
}
