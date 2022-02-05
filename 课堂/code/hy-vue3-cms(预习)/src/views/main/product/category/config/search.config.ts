import { colLayout } from '/@/config'

const searchCategoryFormData = {
  labelWidth: '80px',
  formOptions: [
    {
      label: 'id',
      type: 'input',
      field: 'id',
      placeHolder: '请输入查询id'
    },
    {
      label: '分类名称',
      type: 'input',
      field: 'name',
      placeHolder: '请输入用户名'
    }
  ],
  formColStyle: {
    padding: `10px 50px`
  },
  formStyle: {},
  colLayout
}

export default searchCategoryFormData
