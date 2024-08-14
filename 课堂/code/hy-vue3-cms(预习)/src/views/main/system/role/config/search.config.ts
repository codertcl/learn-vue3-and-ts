import { colLayout } from '/@/config'

const searchRoleformData = {
  labelWidth: '80px',
  formOptions: [
    {
      label: 'id',
      type: 'input',
      field: 'id',
      placeHolder: '请输入查询id'
    },
    {
      label: '角色名称',
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

export default searchRoleformData
