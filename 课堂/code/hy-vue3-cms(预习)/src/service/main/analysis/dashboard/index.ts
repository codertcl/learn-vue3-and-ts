import hyRequest from '/@/service'
// import { GetRoleListParams } from './types'

enum DashboardAPI {
  panelList = '/role/list',
  centerData = '/role/list',
  lineData = '/role/list'
}

/**
 * 1.获取顶部4个数据面板
 * @returns
 */
export function getTopPanel() {
  return hyRequest.post({
    url: DashboardAPI.panelList,
    data: {}
  })
}

/**
 * 3.获取底部折线图和条形图的数据
 * @returns
 */
export function getCenterData() {
  return hyRequest.post({
    url: DashboardAPI.centerData,
    data: {}
  })
}

/**
 * 3.获取底部折线图和条形图的数据
 * @returns
 */
export function getLineData() {
  return hyRequest.post({
    url: DashboardAPI.lineData,
    data: {}
  })
}
