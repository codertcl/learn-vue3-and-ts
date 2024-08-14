<template>
  <div>
    <hy-button-group v-bind="groupInfo" />
    <hy-table :options="tableOptions">
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
      <template #operation="">
        <el-button type="text" size="small" icon="el-icon-edit">编辑</el-button>
        <el-button type="text" size="small" icon="el-icon-delete" class="delete-btn"
          >删除</el-button
        >
      </template>
    </hy-table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import HyButtonGroup from '/@/base-ui/button-group'
import HyTable from '/@/base-ui/table'

export default defineComponent({
  components: {
    HyButtonGroup,
    HyTable
  },
  setup() {
    const groupInfo = {
      btnOptions: [
        {
          isShow: true,
          name: '测试按钮1',
          option: {
            type: 'primary',
            plain: true,
            round: true, // true | false
            circle: true, // true | false
            icon: 'el-icon-check', // icon string
            disabled: true, // true | false
            loading: true, // true
            size: 'small' // medium | small | mini
          }
        },
        {
          isShow: true,
          name: '测试按钮2',
          option: {
            type: 'success',
            round: true, // true | false
            icon: 'el-icon-check',
            size: 'small'
          }
        },
        {
          isShow: false,
          name: '测试按钮3',
          option: {
            type: 'info',
            icon: 'el-icon-check',
            size: 'small'
          }
        },
        {
          isShow: true,
          name: '测试按钮4',
          option: {
            type: 'warning',
            icon: 'el-icon-check',
            size: 'small'
          },
          btnStyle: {
            marginLeft: '30px'
          }
        }
      ],
      groupStyle: {},
      btnStyle: {
        marginLeft: '0px'
      }
    }

    const tableOptions = {
      header: {
        title: '用户列表',
        handleOption: {
          title: '新建用户',
          handleNewClick: () => {
            console.log('新建用户')
          },
          handleRefresh: () => {
            console.log('刷新数据')
          }
        }
      },
      content: {
        showIndex: true,
        dataSource: [
          {
            id: 1,
            name: 'coderwhy',
            realname: 'coderwhy',
            cellphone: 18812345678,
            enable: 1,
            departmentId: 1,
            roleId: 1,
            createAt: '2021-01-02T10:20:26.000Z',
            updateAt: '2021-01-03T04:50:13.000Z'
          },
          {
            id: 2,
            name: 'lilei',
            realname: 'lilei',
            cellphone: 13322223333,
            enable: 1,
            departmentId: 1,
            roleId: 1,
            createAt: '2021-01-03T03:34:34.000Z',
            updateAt: '2021-01-03T04:50:15.000Z'
          },
          {
            id: 3,
            name: 'lucy',
            realname: 'lucy',
            cellphone: 15566668888,
            enable: 1,
            departmentId: 1,
            roleId: 1,
            createAt: '2021-01-03T04:01:40.000Z',
            updateAt: '2021-05-02T07:26:18.000Z'
          },
          {
            id: 6,
            name: 'lily',
            realname: 'lily',
            cellphone: 13355556666,
            enable: 1,
            departmentId: 2,
            roleId: 3,
            createAt: '2021-05-02T07:24:12.000Z',
            updateAt: '2021-05-02T07:26:20.000Z'
          },
          {
            id: 7,
            name: 'kobe',
            realname: 'kobe',
            cellphone: 16655556666,
            enable: 1,
            departmentId: 2,
            roleId: 3,
            createAt: '2021-05-02T07:24:12.000Z',
            updateAt: '2021-05-02T07:26:20.000Z'
          },
          {
            id: 8,
            name: 'wxb',
            realname: '王小波',
            cellphone: 18855556666,
            enable: 1,
            departmentId: 2,
            roleId: 3,
            createAt: '2021-05-02T07:24:12.000Z',
            updateAt: '2021-05-02T07:26:20.000Z'
          },
          {
            id: 9,
            name: 'lyh',
            realname: '李银河',
            cellphone: 17755556666,
            enable: 1,
            departmentId: 2,
            roleId: 3,
            createAt: '2021-05-02T07:24:12.000Z',
            updateAt: '2021-05-02T07:26:20.000Z'
          }
        ],
        columns: [
          {
            prop: 'name',
            label: '用户名',
            minWidth: '100'
          },
          {
            prop: 'realname',
            label: '真实姓名',
            minWidth: '150'
          },
          {
            label: '状态',
            minWidth: '120',
            slotName: 'status'
          },
          {
            label: '创建时间',
            minWidth: '300',
            slotName: 'createAt'
          },
          {
            label: '更新时间',
            minWidth: '300',
            slotName: 'updateAt'
          },
          {
            label: '操作',
            width: '150',
            slotName: 'operation'
          }
        ]
      },
      footer: {
        currentPage: 0,
        pageSizes: [10, 20, 30],
        pageSize: 10,
        total: 100,
        sizeChange: (size: number) => {
          console.log(size)
        },
        currentChange: (current: number) => {
          console.log(current)
        }
      }
    }

    return {
      groupInfo,
      tableOptions
    }
  }
})
</script>

<style scoped></style>
