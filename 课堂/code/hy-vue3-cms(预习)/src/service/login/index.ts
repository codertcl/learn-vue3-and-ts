import hyRequest from '../index'
import { LoginParams, LoginInfo, GetUserByIdParams, UserInfo, UserMenu } from '../types'

export enum UserAPI {
  Login = '/login',
  UserInfo = '/users/',
  UserMenus = '/role/' // 1/menu
}
// 登录模块所有的 api

/**
 * 登录接口
 * @param params
 */
export function login(params: LoginParams) {
  return hyRequest.post<LoginInfo>({
    url: UserAPI.Login,
    data: params
  })
}
/**
 * 获取用户信息
 * @param params
 */
export function getUserById(params: GetUserByIdParams) {
  return hyRequest.get<UserInfo>({
    url: UserAPI.UserInfo + params.id
  })
}
/**
 * 获取用户菜单
 * @param params
 */
export function getUserMenusById(params: GetUserByIdParams) {
  return hyRequest.get<UserMenu[]>({
    url: `${UserAPI.UserMenus + params.id}/menu`
  })
}
