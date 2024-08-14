<template>
  <div class="role">
    <hy-form v-bind="searchFormData" />
    <div class="data-area">
      <hy-table :options="tableDataRef">
        <template #createAt="scope">
          <span>{{ $filters.utcFormat(scope.row.createAt) }}</span>
        </template>
        <template #updateAt="scope">
          <span>{{ $filters.utcFormat(scope.row.updateAt) }}</span>
        </template>
        <template #operation="">
          <el-button type="text" size="small" icon="el-icon-edit">编辑</el-button>
          <el-button type="text" size="small" icon="el-icon-delete" class="delete-btn"
            >删除</el-button
          >
        </template>
      </hy-table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted, ref } from 'vue'
import HyForm from '/@/base-ui/form'
import HyTable from '/@/base-ui/table'
import { getRoleList } from '/@/service/main/system/role'
import searchFormData from './config/search.config'
import tableData from './config/table.config'

export default defineComponent({
  components: {
    HyForm,
    HyTable
  },
  setup() {
    const tableDataRef = ref(tableData)

    // 生命周期
    onMounted(() => {
      const pageSize = tableDataRef.value.footer.pageSize
      const currentPage = tableDataRef.value.footer.currentPage
      const offset = pageSize * currentPage

      getRoleList({ offset, size: pageSize }).then((res) => {
        console.log(res)
        tableDataRef.value.content.dataSource = res.list
      })
    })

    // 定义函数

    return {
      searchFormData,
      tableDataRef
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
</style>
