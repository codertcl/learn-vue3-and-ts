import { defineStore } from 'pinia'
import router from '/@/router'
import { ElMessage } from 'element-plus'
import { getUserPermissins, getFirstMenuPath, getUserMenus } from '../../utils/menu'
import * as logingService from '/@/service/login'
import type { LoginParams, UserInfo, UserMenu } from '/@/service/types'
import localCahce from '/@/utils/cache'
import {
  TOKEN_KEY,
  USER_INFO_KEY,
  USER_MENUS_KEY,
  USER_PERMISSION_KEY
} from '/@/constants/cache_keys'

import { useRoleStore } from './role'
import { useDepartmentStore } from './department'

// import { userInfo } from "node:os";

interface UserState {
  token?: string
  userInfo?: UserInfo
  userMenus?: UserMenu[]
  userPermissions?: string[]
}

export function setupUser() {
  const userStore = useUserStore()

  // 设置token
  const token = localCahce.getCache(TOKEN_KEY)
  token && userStore.setToken(token)

  // 设置userInfo
  const user = JSON.parse(localCahce.getCache(USER_INFO_KEY) || '{}')
  console.log('user=', user)
  user && userStore.setUserInfo(user)

  // 设置 userMenus
  const menus = JSON.parse(localCahce.getCache(USER_MENUS_KEY) || '{}')
  menus && userStore.setUserMenus(menus)

  // 设置 userPermission
  const permissons = JSON.parse(localCahce.getCache(USER_PERMISSION_KEY) || '{}')
  permissons && userStore.setUserPermission(permissons)

  // 获取角色/部门
  useRoleStore().getEntireRoles()
  useDepartmentStore().getEntireDepartments()
}

export const useUserStore = defineStore({
  id: 'user',
  state: (): UserState => ({
    token: undefined,
    userInfo: undefined,
    userMenus: undefined,
    userPermissions: undefined
  }),
  getters: {
    getToken(): string | null {
      return this.token || localCahce.getCache(TOKEN_KEY)
    },
    getUserInfo(): UserInfo {
      return this.userInfo || JSON.parse(localCahce.getCache(USER_INFO_KEY) || '')
    },
    getUserMenus(): UserMenu[] {
      return this.userMenus || JSON.parse(localCahce.getCache(USER_MENUS_KEY) || '')
    },
    getUserPermission() {
      return this.userPermissions || JSON.parse(localCahce.getCache(USER_PERMISSION_KEY) || '')
    }
  },
  actions: {
    setToken(token: string) {
      this.token = token
      localCahce.setCache(TOKEN_KEY, token)
    },
    setUserInfo(userInfo: UserInfo) {
      this.userInfo = userInfo
      localCahce.setCache(USER_INFO_KEY, JSON.stringify(userInfo))
    },
    setUserMenus(userMenus: UserMenu[]) {
      this.userMenus = userMenus
      localCahce.setCache(USER_MENUS_KEY, JSON.stringify(userMenus))
    },
    setUserPermission(permissions: string[]) {
      this.userPermissions = permissions
      localCahce.setCache(USER_PERMISSION_KEY, JSON.stringify(permissions))
    },

    async login(params: LoginParams) {
      // 获取token
      const { id, token } = await logingService.login(params)
      console.log(token)
      this.setToken(token)

      // 获取userInfo
      const userInfo = await logingService.getUserById({ id })
      this.setUserInfo(userInfo)

      // 获取 该角色的菜单和按钮
      const userMenus = await logingService.getUserMenusById({ id })
      // 保存 用户按钮权限
      this.setUserPermission(getUserPermissins(userMenus))
      // 保存 用户菜单权限
      this.setUserMenus(getUserMenus(userMenus))

      // 获取所有角色/部门
      useRoleStore().getEntireRoles()
      useDepartmentStore().getEntireDepartments()

      // 跳转到第一个菜单
      const firstMenuPath = getFirstMenuPath(userMenus)
      console.log('firstMenuPath=', firstMenuPath)
      if (firstMenuPath) {
        router.push(firstMenuPath)
      } else {
        // 没有分配菜单
        ElMessage({
          showClose: true,
          type: 'warning',
          message: '您暂时没有访问系统的权限，请联系管理分配'
        })
      }
    }
  }
})
