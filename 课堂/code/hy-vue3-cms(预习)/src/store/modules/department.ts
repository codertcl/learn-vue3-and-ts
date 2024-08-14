import { defineStore } from 'pinia'

import { getDepartmentList } from '/@/service/main/system/department'

export const useDepartmentStore = defineStore({
  id: 'department',
  state: () => ({
    entireDepartments: []
  }),
  getters: {
    departmentOptions() {
      return this.entireDepartments.map((department: any) => {
        return {
          label: department.name,
          value: department.id
        }
      })
    }
  },
  actions: {
    getEntireDepartments() {
      getDepartmentList({ offset: 0, size: 100 }).then((res) => {
        this.entireDepartments = res.list
      })
    }
  }
})
