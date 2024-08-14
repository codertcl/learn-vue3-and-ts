import hyRequest from '/@/service'

enum CategoryAPI {
  CategoryList = '/category/list'
}

export function getCategoryList(params: any) {
  return hyRequest.post({
    url: CategoryAPI.CategoryList,
    data: params
  })
}
