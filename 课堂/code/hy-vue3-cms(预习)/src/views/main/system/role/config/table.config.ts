const tableOptions = {
  header: {
    title: '角色列表',
    handleOption: {
      title: '新建角色',
      handleNewClick: () => {
        console.log('新建角色')
      },
      handleRefresh: () => {
        console.log('刷新数据')
      }
    }
  },
  content: {
    showIndex: true,
    dataSource: [],
    columns: [
      {
        prop: 'name',
        label: '角色名称',
        minWidth: '100'
      },
      {
        prop: 'intro',
        label: '权限介绍',
        minWidth: '120'
      },
      {
        label: '创建时间',
        minWidth: '280',
        slotName: 'createAt'
      },
      {
        label: '更新时间',
        minWidth: '280',
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
    total: 0,
    sizeChange: (size: number) => {
      console.log(size)
    },
    currentChange: (current: number) => {
      console.log(current)
    }
  }
}

export default tableOptions
