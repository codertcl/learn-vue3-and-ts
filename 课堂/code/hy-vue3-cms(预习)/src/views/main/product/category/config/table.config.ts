const tableOptions = {
  header: {
    title: '类别列表',
    handleOption: {
      title: '新建类别',
      handleNewClick: () => {
        console.log('新建类别')
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
        label: '类别名称',
        minWidth: '100'
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
