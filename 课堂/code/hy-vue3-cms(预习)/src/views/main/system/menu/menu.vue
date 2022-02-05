<template>
  <div class="role">
    <el-form ref="form" class="form-area" :model="form" label-width="80px">
      <el-row type="flex" justify="start">
        <el-col :span="6">
          <el-form-item label="id">
            <el-input v-model="form.id"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="菜单名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="创建时间">
            <el-date-picker
              v-model="form.createAt"
              type="date"
              placeholder="开始日期"
              style="width: 47%"
            ></el-date-picker>
            -
            <el-date-picker
              v-model="form.createAt"
              type="date"
              placeholder="截止日期"
              style="width: 47%"
            ></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="更新时间">
            <el-date-picker
              v-model="form.updateAt"
              type="date"
              placeholder="开始日期"
              style="width: 47%"
            ></el-date-picker>
            -
            <el-date-picker
              v-model="form.updateAt"
              type="date"
              placeholder="截止日期"
              style="width: 47%"
            ></el-date-picker>
          </el-form-item>
        </el-col>

        <!-- 占位的ElCol -->
        <el-col :span="6"></el-col>

        <el-col :span="6">
          <el-row type="flex" justify="end" style="width: 100%">
            <el-button>重置</el-button>
            <el-button type="primary">查询</el-button>
          </el-row>
        </el-col>
      </el-row>
    </el-form>

    <div class="data-area">
      <div class="data-header">
        <span class="title">菜单列表</span>
        <el-row class="operation">
          <el-button type="primary" @click="handleNewRole">新建菜单</el-button>
          <i class="el-icon-edit"></i>
          <i class="el-icon-delete"></i>
        </el-row>
      </div>
      <div class="data-list">
        <el-table
          :data="menus"
          border
          style="width: 100%"
          row-key="id"
          :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
          >>
          <!-- <el-table-column prop="id" align="center" label="id" min-width="100"> </el-table-column> -->
          <el-table-column prop="name" align="center" label="菜单名称" min-width="150">
          </el-table-column>
          <el-table-column prop="type" align="center" label="等级" min-width="60">
          </el-table-column>
          <el-table-column prop="icon" align="center" label="菜单icon" min-width="120">
          </el-table-column>
          <el-table-column prop="url" align="center" label="url" min-width="120"> </el-table-column>
          <el-table-column prop="sort" align="center" label="排序" min-width="120">
          </el-table-column>
          <el-table-column prop="permission" align="center" label="权限" min-width="200">
          </el-table-column>
          <el-table-column prop="createAt" align="center" label="创建时间" min-width="250">
          </el-table-column>
          <el-table-column prop="updateAt" align="center" label="更新时间" min-width="250">
          </el-table-column>
          <el-table-column align="center" label="操作" width="150">
            <template #default="scope">
              <el-button
                type="text"
                size="small"
                icon="el-icon-edit"
                @click="handleClick(scope.row)"
                >编辑</el-button
              >
              <el-button type="text" size="small" icon="el-icon-delete" class="delete-btn"
                >删除</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="data-page">
        <el-pagination
          v-model:currentPage="currentPage"
          :page-size="100"
          layout="total, prev, pager, next"
          :total="1000"
          @current-change="handleCurrentChange"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted, ref } from 'vue'
import { getMenuTreeList } from '/@/service/main/system/menu'
import {
  ElForm,
  ElFormItem,
  ElInput,
  ElRow,
  ElCol,
  ElButton,
  ElTable,
  ElTableColumn,
  ElPagination
} from 'element-plus'

export default defineComponent({
  components: {
    ElForm,
    ElFormItem,
    ElInput,
    ElRow,
    ElCol,
    ElButton,
    ElTable,
    ElTableColumn,
    ElPagination
  },
  setup() {
    const form = reactive({
      id: '',
      name: '',
      intro: '',
      createAt: '',
      updateAt: ''
    })
    const menus = ref([])
    const currentPage = ref(0)

    // 生命周期
    onMounted(() => {
      getMenuTreeList().then((res) => {
        console.log(res)
        menus.value = res
      })
    })

    // 定义函数
    const handleNewRole = () => {}

    const handleCurrentChange = (current: number) => {
      console.log(current)
    }

    return {
      form,
      menus,
      handleNewRole,
      currentPage,
      handleCurrentChange
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
  margin: 10px 50px;
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
