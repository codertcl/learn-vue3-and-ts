import hyRequest from '/@/service'
import { GetUserListParams, NewUserInfo } from './types'

enum UserAPI {
  UserList = '/users/list',
  NewUser = '/users',
  DeleteUser = '/users/'
}

export function getUserList(params: GetUserListParams) {
  return hyRequest.post({
    url: UserAPI.UserList,
    data: params
  })
}

export function createUser(userInfo: NewUserInfo) {
  return hyRequest.post({
    url: UserAPI.NewUser,
    data: userInfo
  })
}

export function deleteUserById(userId: number) {
  return hyRequest.delete({
    url: UserAPI.DeleteUser + userId
  })
}
