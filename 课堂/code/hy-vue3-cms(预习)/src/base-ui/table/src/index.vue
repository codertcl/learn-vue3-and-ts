<template>
  <div class="table">
    <div class="header">
      <slot name="header">
        <span class="title">{{ options.header.title }}</span>
        <slot name="handler">
          <el-row class="handler">
            <el-button
              type="primary"
              size="small"
              @click="options.header.handleOption.handleNewClick"
            >
              {{ options.header.handleOption.title }}
            </el-button>
            <el-button
              type="text"
              icon="el-icon-refresh-right"
              @click="options.header.handleOption.handleRefresh"
            ></el-button>
          </el-row>
        </slot>
      </slot>
    </div>
    <div class="content">
      <slot name="content">
        <el-table border :data="options.content.dataSource">
          <template v-if="options.content.showIndex">
            <el-table-column type="index" align="center" label="序号" width="100"></el-table-column>
          </template>
          <template v-for="(item, index) in options.content.columns" :key="index">
            <el-table-column align="center" v-bind="item" show-overflow-tooltip>
              <template #default="scope">
                <slot :name="item.slotName" :row="scope.row">
                  {{ item.type === 'index' ? index + 1 : scope.row[item.prop] }}
                </slot>
              </template>
            </el-table-column>
          </template>
        </el-table>
      </slot>
    </div>
    <div class="footer">
      <slot name="footer">
        <el-pagination
          v-bind="options.footer"
          layout="total, sizes, prev, pager, next, jumper"
          @size-change="options.footer.sizeChange"
          @current-change="options.footer.currentChange"
        >
        </el-pagination>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    options: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.table {
  padding: 10px;
  background-color: #fff;
}

.header {
  display: flex;
  height: 45px;
  padding: 0 5px;
  justify-content: space-between;
  align-items: center;

  .title {
    font-size: 20px;
    font-weight: 700;
  }

  .handler {
    align-items: center;
  }
}

.footer {
  margin-top: 15px;
  // border: 1px solid red;

  .el-pagination {
    text-align: right;
  }
}
</style>
