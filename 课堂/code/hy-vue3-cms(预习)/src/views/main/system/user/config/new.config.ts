const newFormData = {
  labelWidth: '80px',
  formOptions: [
    {
      label: '用户名',
      type: 'input',
      field: 'name',
      placeHolder: '请输入用户名'
    },
    {
      label: '密码',
      type: 'input',
      field: 'password',
      placeHolder: '请输入密码'
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
      label: '选择角色',
      type: 'select',
      placeHolder: '请选择角色',
      field: 'roleId',
      otherOptions: {
        options: []
      }
    },
    {
      label: '选择部门',
      type: 'select',
      placeHolder: '请选择部门',
      field: 'departmentId',
      otherOptions: {
        options: []
      }
    }
  ],
  formStyle: {},
  colLayout: {
    span: 24
  }
}

export default newFormData
