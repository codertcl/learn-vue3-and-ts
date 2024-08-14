import hyRequest from '/@/service'
import { GetDepartmentListParams } from './types'

enum DepartmentAPI {
  DepartmentList = '/department/list'
}

export function getDepartmentList(params: GetDepartmentListParams) {
  return hyRequest.post({
    url: DepartmentAPI.DepartmentList,
    data: params
  })
}
