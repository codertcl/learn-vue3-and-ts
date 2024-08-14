import hyRequest from '/@/service'

enum MenuAPI {
  MenuList = '/menu/tree'
}

export function getMenuTreeList() {
  return hyRequest.get({
    url: MenuAPI.MenuList
  })
}
