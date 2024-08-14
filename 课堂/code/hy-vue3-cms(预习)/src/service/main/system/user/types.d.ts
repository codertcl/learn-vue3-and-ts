import { ParamsPagination } from '/@/service/types'

export interface GetUserListParams extends ParamsPagination {
  cellphone?: number
}

export interface NewUserInfo {
  name: string
  password: string
  realname?: string
  cellphone: number
  enable?: number
  departmentId: number
  roleId: number
}
