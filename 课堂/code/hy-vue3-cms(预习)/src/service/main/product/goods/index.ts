import hyRequest from '/@/service'

enum GoodsAPI {
  GoodsList = '/goods/list'
}

export function getGoodsList(params: any) {
  return hyRequest.post({
    url: GoodsAPI.GoodsList,
    data: params
  })
}
