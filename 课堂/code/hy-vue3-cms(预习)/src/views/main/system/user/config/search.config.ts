import { colLayout } from '/@/config'

const formData = {
  labelWidth: '80px',
  formOptions: [
    {
      label: 'id',
      type: 'input',
      field: 'id',
      placeHolder: '请输入查询id'
    },
    {
      label: '用户名',
      type: 'input',
      field: 'name',
      placeHolder: '请输入用户名'
    },
    {
      label: '真实姓名',
      type: 'input',
      field: 'realname',
      placeHolder: '请输入真实姓名'
    },
    {
      label: '电话号码',
      type: 'input',
      field: 'cellphone',
      defaultFieldValue: undefined,
      placeHolder: '请输入手机号'
    },
    {
      label: '状态',
      type: 'select',
      placeHolder: '请选择状态',
      field: 'enable',
      otherOptions: {
        options: [
          {
            label: '正常',
            value: 1
          },
          {
            label: '禁止',
            value: 0
          }
        ]
      }
    },
    {
      label: '创建时间',
      type: 'datepicker',
      field: 'createtime',
      otherOptions: {
        startPlaceholder: '开始日期',
        endPlaceholder: '结束日期'
      }
    }
  ],
  formColStyle: {
    padding: `10px 50px`
  },
  formStyle: {},
  colLayout
}

export default formData
