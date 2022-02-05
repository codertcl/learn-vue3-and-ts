<template>
  <div>
    <hy-form v-bind="searchGoodsFormData" />

    <div class="data-area">
      <hy-table :options="tableDataRef">
        <template #imgUrl="scope">
          <el-image
            class="goods-img"
            :src="scope.row.imgUrl"
            :preview-src-list="[scope.row.imgUrl]"
          >
          </el-image>
        </template>
        <template #createAt="scope">
          <span>{{ $filters.utcFormat(scope.row.createAt) }}</span>
        </template>
        <template #updateAt="scope">
          <span>{{ $filters.utcFormat(scope.row.updateAt) }}</span>
        </template>
        <template #operation="scope">
          <el-button type="text" size="small" icon="el-icon-edit" @click="handleGoodEdit(scope.row)"
            >编辑</el-button
          >
          <el-button
            type="text"
            size="small"
            icon="el-icon-delete"
            class="delete-btn"
            @click="handleGoodDelete(scope.row)"
            >删除</el-button
          >
        </template>
      </hy-table>
    </div>

    <hy-good-modal ref="goodModalRef" @confirm="handleGoodConfirm" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { ElMessageBox, ElMessage } from 'element-plus'
import HyForm from '/@/base-ui/form'
import HyTable from '/@/base-ui/table'

import { getGoodsList } from '/@/service/main/product/goods'

import HyGoodModal from '/@/components/modals/good-modal'

import searchGoodsFormData from './config/search.config'
// import tableData from './config/table.config'
import useTableOptions from './config/table.config'

export default defineComponent({
  components: {
    HyForm,
    HyTable,
    HyGoodModal
  },
  setup() {
    const goodModalRef = ref<any>(null)
    const showGoodModal = ref<any>(false)
    // const tableDataRef = ref(tableData)
    /**
     * 新建商品
     */
    const handleNewClick = () => {
      goodModalRef.value.show()
    }
    /**
     * 新建和编辑商品-保存操作
     */
    const handleGoodConfirm = (good: any) => {
      if (good.id) {
        console.log('编辑保存 good=', good)
      } else {
        console.log('新建保存 good=', good)
      }
    }
    /**
     * 编辑商品
     */
    const handleGoodEdit = (info: any) => {
      goodModalRef.value.show({ ...info })
    }
    /**
     * 删除商品
     */
    const handleGoodDelete = (info: any) => {
      ElMessageBox.confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          ElMessage({
            type: 'success',
            message: '删除成功!'
          })
        })
        .catch(() => {
          ElMessage({
            type: 'info',
            message: '已取消删除'
          })
        })
    }
    const tableDataRef = useTableOptions({
      handleNewClick
    })

    onMounted(() => {
      const pageSize = tableDataRef.value.footer.pageSize
      const currentPage = tableDataRef.value.footer.currentPage
      const offset = pageSize * currentPage

      getGoodsList({ offset, size: pageSize }).then((res) => {
        tableDataRef.value.footer.total = res.totalCount
        tableDataRef.value.content.dataSource = res.list
      })
    })

    return {
      goodModalRef,
      showGoodModal,
      searchGoodsFormData,
      tableDataRef,

      handleGoodConfirm,
      handleGoodEdit,
      handleGoodDelete
    }
  }
})
</script>

<style scoped>
.data-area {
  padding: 10px;
  margin-top: 20px;
  background-color: #fff;
}

.goods-img {
  width: 60px;
  height: 60px;
}
</style>
