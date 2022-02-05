/**
 * service层的所有的接口的定义
 */
export interface Result<T = any> {
  code: number
  data: T
}

export interface LoginParams {
  name: string
  password: string
}

export interface GetUserByIdParams {
  id: string | number
}

export interface LoginInfo {
  id: number | string
  token: string
  name: string
}

export interface Role {
  id: number | string
  name: string
  intro: string
  createAt: Date
  updateAt: Date
}

export interface Department {
  id: string | number
  name: string
  parentId?: any
  createAt: Date
  updateAt: Date
  leader: string
}

export interface UserInfo {
  id: string | number
  name: string
  realname: string
  cellphone: number
  enable: number
  createAt: Date
  updateAt: Date
  role: Role
  department: Department
}

export interface UserMenu {
  icon?: string
  id: number
  name: string
  children?: UserMenu[]
  sort?: number
  type: number
  url: string
  parentId: number
  permission: string
}

/**
 * 请求Params中都需要的offset/size的父类接口
 */
export interface ParamsPagination {
  offset: number
  size: number
}
