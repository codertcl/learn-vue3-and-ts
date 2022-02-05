import hyRequest from '/@/service'
import { GetRoleListParams } from './types'

enum RoleAPI {
  RoleList = '/role/list'
}

export function getRoleList(params: GetRoleListParams) {
  return hyRequest.post({
    url: RoleAPI.RoleList,
    data: params
  })
}
