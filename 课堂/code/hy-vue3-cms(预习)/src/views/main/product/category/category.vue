<template>
  <div class="category">
    <hy-form v-bind="searchCategoryFormData" />
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
import { defineComponent, ref, onMounted } from 'vue'

import HyForm from '/@/base-ui/form'
import HyTable from '/@/base-ui/table'
import { getCategoryList } from '/@/service/main/product/category'

import searchCategoryFormData from './config/search.config'
import tableData from './config/table.config'

export default defineComponent({
  components: {
    HyForm,
    HyTable
  },
  setup() {
    const tableDataRef = ref(tableData)

    onMounted(() => {
      const pageSize = tableDataRef.value.footer.pageSize
      const currentPage = tableDataRef.value.footer.currentPage
      const offset = pageSize * currentPage
      getCategoryList({ offset, size: pageSize }).then((res) => {
        tableDataRef.value.content.dataSource = res.list
      })
    })

    return {
      searchCategoryFormData,
      tableDataRef
    }
  }
})
</script>

<style scoped>
.data-area {
  margin-top: 20px;
  padding: 10px;
  background-color: #fff;
}
</style>
