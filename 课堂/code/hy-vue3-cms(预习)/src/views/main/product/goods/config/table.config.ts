// const tableOptions = {
//   header: {
//     title: '商品列表',
//     handleOption: {
//       title: '新建商品',
//       handleNewClick: () => {
//         console.log('新建商品')
//       },
//       handleRefresh: () => {
//         console.log('刷新数据')
//       }
//     }
//   },
//   content: {
//     showIndex: true,
//     dataSource: [],
//     columns: [
//       {
//         prop: 'name',
//         label: '商品名称',
//         minWidth: '100'
//       },
//       {
//         prop: 'oldPrice',
//         label: '原价',
//         minWidth: '60'
//       },
//       {
//         prop: 'newPrice',
//         label: '现价',
//         minWidth: '60'
//       },
//       {
//         prop: 'desc',
//         label: '商品描述',
//         minWidth: '100'
//       },
//       {
//         prop: 'imgUrl',
//         label: '商品图片',
//         minWidth: '80',
//         slotName: 'imgUrl'
//       },
//       {
//         prop: 'inventoryCount',
//         label: '库存',
//         minWidth: '80'
//       },
//       {
//         prop: 'saleCount',
//         label: '销量',
//         minWidth: '80'
//       },
//       {
//         prop: 'favorCount',
//         label: '收藏',
//         minWidth: '80'
//       },
//       {
//         prop: 'address',
//         label: '地址',
//         minWidth: '80'
//       },
//       {
//         label: '创建时间',
//         minWidth: '200',
//         slotName: 'createAt'
//       },
//       {
//         label: '更新时间',
//         minWidth: '200',
//         slotName: 'updateAt'
//       },
//       {
//         label: '操作',
//         width: '150',
//         slotName: 'operation'
//       }
//     ]
//   },
//   footer: {
//     currentPage: 0,
//     pageSizes: [10, 20, 30],
//     pageSize: 10,
//     total: 0,
//     sizeChange: (size: number) => {
//       console.log(size)
//     },
//     currentChange: (current: number) => {
//       console.log(current)
//     }
//   }
// }

// export default tableOptions
import { defineComponent, ref, onMounted } from 'vue'
const useTableOptions = (parmas: any) => {
  let { handleNewClick } = parmas
  const tableDataConf = ref<any>(null)
  tableDataConf.value = {
    header: {
      title: '商品列表',
      handleOption: {
        title: '新建商品',
        handleNewClick,
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
          label: '商品名称',
          minWidth: '100'
        },
        {
          prop: 'oldPrice',
          label: '原价',
          minWidth: '60'
        },
        {
          prop: 'newPrice',
          label: '现价',
          minWidth: '60'
        },
        {
          prop: 'desc',
          label: '商品描述',
          minWidth: '100'
        },
        {
          prop: 'imgUrl',
          label: '商品图片',
          minWidth: '80',
          slotName: 'imgUrl'
        },
        {
          prop: 'inventoryCount',
          label: '库存',
          minWidth: '80'
        },
        {
          prop: 'saleCount',
          label: '销量',
          minWidth: '80'
        },
        {
          prop: 'favorCount',
          label: '收藏',
          minWidth: '80'
        },
        {
          prop: 'address',
          label: '地址',
          minWidth: '80'
        },
        {
          label: '创建时间',
          minWidth: '200',
          slotName: 'createAt'
        },
        {
          label: '更新时间',
          minWidth: '200',
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
  return tableDataConf
}

export default useTableOptions
