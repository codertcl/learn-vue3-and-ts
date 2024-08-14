import { defineStore } from 'pinia'

import { getRoleList } from '/@/service/main/system/role'

export const useRoleStore = defineStore({
  id: 'role',
  state: () => ({
    entireRoles: []
  }),
  getters: {
    roleOptions() {
      return this.entireRoles.map((role: any) => {
        return {
          label: role.name,
          value: role.id
        }
      })
    }
  },
  actions: {
    getEntireRoles() {
      getRoleList({ offset: 0, size: 100 }).then((res) => {
        this.entireRoles = res.list
      })
    }
  }
})
