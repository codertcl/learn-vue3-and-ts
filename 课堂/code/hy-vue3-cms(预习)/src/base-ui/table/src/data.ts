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
    dataSource: [],
    columns: [
      {
        type: 'index',
        label: '序号',
        width: '100'
      },
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
        minWidth: '300'
      },
      {
        label: '更新时间',
        minWidth: '300'
      },
      {
        label: '操作',
        width: '150'
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
    currentChagne: (current: number) => {
      console.log(current)
    }
  }
}
