<template>
  <div class="department">
    <hy-form v-bind="searchDepartmentformData" />
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
import { defineComponent, onMounted, ref } from 'vue'
import { getDepartmentList } from '/@/service/main/system/department'

import searchDepartmentformData from './config/search.config'
import tableData from './config/table.config'

import HyForm from '/@/base-ui/form'
import HyTable from '/@/base-ui/table'

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
      getDepartmentList({ offset: offset, size: pageSize }).then((res) => {
        tableDataRef.value.content.dataSource = res.list
      })
    })

    return {
      searchDepartmentformData,
      tableDataRef
    }
  }
})
</script>

<style scoped lang="less">
.form-area {
  background-color: #fff;
  padding-top: 10px;
}

.el-col {
  margin: 10px;
}

.data-area {
  margin-top: 20px;
  padding: 10px;
  background-color: #fff;
}

.data-header {
  padding: 8px 15px;
  height: 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .title {
    font-size: 20px;
    font-weight: 700;
  }

  .operation {
    align-items: center;

    i {
      margin: 0 8px;
    }
  }
}

.data-list {
  .delete-btn {
    color: #f56c6c;
  }
}

.data-page {
  margin-top: 10px;
  .el-pagination {
    text-align: right;
  }
}
</style>
