<template>
  <div class="user">
    <hy-form v-bind="searchFormData" @query="queryData" @reset="resetData" />

    <div class="data-area">
      <hy-table :options="tableOptionsRef">
        <template #status="scope">
          <el-button plain :type="scope.row.enable ? 'success' : 'danger'" size="mini">
            {{ $filters.showStatus(scope.row.enable) }}
          </el-button>
        </template>
        <template #createAt="scope">
          <span>{{ $filters.utcFormat(scope.row.createAt) }}</span>
        </template>
        <template #updateAt="scope">
          <span>{{ $filters.utcFormat(scope.row.updateAt) }}</span>
        </template>
        <template #operation="scope">
          <el-button type="text" size="small" icon="el-icon-edit" @click="handleEditInfo(scope.row)"
            >编辑</el-button
          >
          <el-button
            type="text"
            size="small"
            icon="el-icon-delete"
            class="delete-btn"
            @click="handleDelete(scope.row)"
            >删除</el-button
          >
        </template>
      </hy-table>
    </div>

    <hy-handle-modal
      v-model="showHandleModal"
      :form-data="newFormDataRef"
      @confirm="handleConfirm"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, computed } from 'vue'
import { getUserList, createUser, deleteUserById } from '/@/service/main/system/user'

import { useRoleStore } from '/@/store/modules/role'
import { useDepartmentStore } from '/@/store/modules/department'

import HyForm from '/@/base-ui/form'
import HyTable from '/@/base-ui/table'
import HyHandleModal from '/@/components/handle-modal'

import searchFormData from './config/search.config'
import newFormData from './config/new.config'
import tableOptions from './config/table.config'

export default defineComponent({
  components: {
    HyForm,
    HyTable,
    HyHandleModal
  },
  setup() {
    const showHandleModal = ref<boolean>(false)

    // tableOptions的处理
    tableOptions.header.handleOption.handleNewClick = () => {
      showHandleModal.value = true
    }
    tableOptions.header.handleOption.handleRefresh = () => {
      tableOptionsRef.value.footer.total = 0
      tableOptionsRef.value.content.dataSource = []
      getUserListData()
    }
    const tableOptionsRef = ref(tableOptions)

    // 对新建数据的处理
    const newFormDataRef = ref(newFormData)
    const roleStore = useRoleStore()
    const departmentStore = useDepartmentStore()
    const roleOption = newFormDataRef.value.formOptions.find((item) => item.field === 'roleId')
    roleOption!.otherOptions!.options = roleStore.roleOptions
    const departmentOption = newFormDataRef.value.formOptions.find(
      (item) => item.field === 'departmentId'
    )
    departmentOption!.otherOptions!.options = departmentStore.departmentOptions

    // 生命周期
    onMounted(() => {
      getUserListData()
    })

    const getUserListData = (queryInfo: any = {}) => {
      let pageSize = tableOptionsRef.value.footer.pageSize
      let currentPage = tableOptionsRef.value.footer.currentPage
      const offset = pageSize * currentPage
      getUserList({ offset: offset, size: pageSize, ...queryInfo }).then((res) => {
        tableOptionsRef.value.footer.total = res.totalCount
        tableOptionsRef.value.content.dataSource = res.list
      })
    }

    const queryData = (queryInfo: any) => {
      console.log(queryInfo.createtime)
      getUserListData(queryInfo)
    }

    const resetData = () => {
      getUserListData()
    }

    // 定义函数
    const handleNewUser = () => {
      newFormDataRef.value.formOptions.forEach((item) => {
        item.defaultFieldValue = undefined
      })
      showHandleModal.value = true
    }

    const handleEditInfo = (info: any) => {
      newFormDataRef.value.formOptions.splice(
        newFormDataRef.value.formOptions.findIndex((item) => item.field === 'password'),
        1
      )
      newFormDataRef.value.formOptions.forEach((item: any) => {
        item.defaultFieldValue = info[item.field]
      })
      showHandleModal.value = true
    }

    const handleDelete = (info: any) => {
      deleteUserById(info.id)
      getUserListData()
    }

    // 处理新建的回调函数
    const handleConfirm = (formData: any) => {
      createUser(formData).then((res: any) => {
        getUserListData()
      })
    }

    return {
      queryData,
      resetData,
      handleNewUser,
      handleEditInfo,
      handleDelete,
      searchFormData,
      newFormDataRef,
      showHandleModal,
      handleConfirm,
      tableOptionsRef
    }
  }
})
</script>

<style scoped lang="less">
.data-area {
  padding: 10px;
  margin-top: 20px;
  background-color: #fff;
}
.delete-btn {
  color: #f56c6c;
}
</style>
