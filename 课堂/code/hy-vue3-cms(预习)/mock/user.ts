import type { MockMethod } from 'vite-plugin-mock'
import { resultError, resultSuccess } from './utils/_util'

/**
 * 模拟后台接口
 */
export default [
  // user login
  {
    url: '/api/login',
    timeout: 1000,
    method: 'post',
    response: ({ body }) => {
      const { name, password } = body
      const checkUser = createFakeUserList().find(
        (item) => item.username === name && password === item.password
      )
      // 返回登录失败
      if (!checkUser) {
        return resultError('Incorrect account or password！')
      }
      const { id, username, token } = checkUser
      // 返回登录成功
      return resultSuccess({
        id,
        name: username,
        token
      })
    }
  },
  // user info
  {
    url: '/api/users/1',
    timeout: 1000,
    method: 'get',
    response: () => {
      // 统一返回这个菜单
      return createUserInfo()
    }
  },
  // user menu
  {
    url: '/api/role/1/menu',
    timeout: 1000,
    method: 'get',
    response: () => {
      // 统一返回这个菜单
      return createUserMenus()
    }
  }
  // todo ...
] as MockMethod[]

function createFakeUserList() {
  return [
    {
      id: 1,
      username: 'coderwhy',
      password: '123456',
      token: 'eycoderwhyp8'
    },
    {
      id: 2,
      username: 'liujun',
      password: '123456',
      token: 'eycoderwhyp8'
    }
  ]
}

function createUserInfo() {
  return {
    id: 1,
    name: 'coderwhy',
    realname: 'coderwhy-m',
    cellphone: 18812345678,
    enable: 1,
    createAt: '2021-01-02T10:20:26.000Z',
    updateAt: '2021-01-03T04:50:13.000Z',
    role: {
      id: 1,
      name: '超级管理员',
      intro: '所有权限',
      createAt: '2021-01-02T10:01:52.000Z',
      updateAt: '2021-01-02T10:01:52.000Z'
    },
    department: {
      id: 1,
      name: '总裁办',
      parentId: null,
      createAt: '2021-01-02T10:03:09.000Z',
      updateAt: '2021-01-05T08:25:46.000Z',
      leader: 'coderwhy-m'
    }
  }
}

function createUserMenus() {
  return [
    {
      id: 1000,
      url: '',
      name: '模拟多级菜单',
      sort: 106,
      type: 1, // 目录
      children: [
        {
          id: 1000,
          url: '',
          name: '菜单1(目录)',
          sort: 106,
          type: 1, // 目录
          children: [
            {
              id: 1000,
              url: '',
              name: '菜单1.1(目录)',
              sort: 106,
              type: 1, // 目录
              children: [
                {
                  id: 1000,
                  url: '',
                  name: '菜单1.1.1',
                  sort: 106,
                  type: 2, // 菜单
                  children: null,
                  parentId: 38
                }
              ],
              parentId: 38
            },
            {
              id: 1000,
              url: '',
              name: '菜单1.2',
              sort: 106,
              type: 2, // 菜单
              children: [],
              parentId: 38
            }
          ],
          parentId: 38
        },
        {
          id: 1000,
          url: '',
          name: '菜单2',
          sort: 106,
          type: 2, // 菜单
          children: null,
          parentId: 38
        }
      ],
      parentId: 38
    },
    {
      id: 38,
      name: '系统总览m',
      type: 1,
      url: '/main/analysis',
      icon: 'el-icon-monitor',
      sort: 1,
      children: [
        {
          id: 39,
          url: '/main/analysis/overview',
          name: '核心技术m',
          sort: 106,
          type: 2,
          children: null,
          parentId: 38
        },
        {
          id: 40,
          url: '/main/analysis/dashboard',
          name: '商品统计',
          sort: 107,
          type: 2,
          children: null,
          parentId: 38
        }
      ]
    },
    {
      id: 1,
      name: '系统管理',
      type: 1,
      url: '/main/system',
      icon: 'el-icon-setting',
      sort: 2,
      children: [
        {
          id: 2,
          url: '/main/system/user',
          name: '用户管理',
          sort: 100,
          type: 2,
          children: [
            {
              id: 5,
              url: null,
              name: '创建用户',
              sort: null,
              type: 3,
              parentId: 2,
              permission: 'system:user:create'
            },
            {
              id: 6,
              url: null,
              name: '删除用户',
              sort: null,
              type: 3,
              parentId: 2,
              permission: 'system:user:delete'
            },
            {
              id: 7,
              url: null,
              name: '修改用户',
              sort: null,
              type: 3,
              parentId: 2,
              permission: 'system:user:update'
            },
            {
              id: 8,
              url: null,
              name: '查询用户',
              sort: null,
              type: 3,
              parentId: 2,
              permission: 'system:user:query'
            }
          ],
          parentId: 1
        },
        {
          id: 3,
          url: '/main/system/department',
          name: '部门管理',
          sort: 101,
          type: 2,
          children: [
            {
              id: 17,
              url: null,
              name: '创建部门',
              sort: null,
              type: 3,
              parentId: 3,
              permission: 'system:department:create'
            },
            {
              id: 18,
              url: null,
              name: '删除部门',
              sort: null,
              type: 3,
              parentId: 3,
              permission: 'system:department:delete'
            },
            {
              id: 19,
              url: null,
              name: '修改部门',
              sort: null,
              type: 3,
              parentId: 3,
              permission: 'system:department:update'
            },
            {
              id: 20,
              url: null,
              name: '查询部门',
              sort: null,
              type: 3,
              parentId: 3,
              permission: 'system:department:query'
            }
          ],
          parentId: 1
        },
        {
          id: 4,
          url: '/main/system/menu',
          name: '菜单管理',
          sort: 103,
          type: 2,
          children: [
            {
              id: 21,
              url: null,
              name: '创建菜单',
              sort: null,
              type: 3,
              parentId: 4,
              permission: 'system:menu:create'
            },
            {
              id: 22,
              url: null,
              name: '删除菜单',
              sort: null,
              type: 3,
              parentId: 4,
              permission: 'system:menu:delete'
            },
            {
              id: 23,
              url: null,
              name: '修改菜单',
              sort: null,
              type: 3,
              parentId: 4,
              permission: 'system:menu:update'
            },
            {
              id: 24,
              url: null,
              name: '查询菜单',
              sort: null,
              type: 3,
              parentId: 4,
              permission: 'system:menu:query'
            }
          ],
          parentId: 1
        },
        {
          id: 25,
          url: '/main/system/role',
          name: '角色管理',
          sort: 102,
          type: 2,
          children: [
            {
              id: 26,
              url: null,
              name: '创建角色',
              sort: null,
              type: 3,
              parentId: 25,
              permission: 'system:role:create'
            },
            {
              id: 27,
              url: null,
              name: '删除角色',
              sort: null,
              type: 3,
              parentId: 25,
              permission: 'system:role:delete'
            },
            {
              id: 28,
              url: null,
              name: '修改角色',
              sort: null,
              type: 3,
              parentId: 25,
              permission: 'system:role:update'
            },
            {
              id: 29,
              url: null,
              name: '查询角色',
              sort: null,
              type: 3,
              parentId: 25,
              permission: 'system:role:query'
            }
          ],
          parentId: 1
        }
      ]
    },
    {
      id: 9,
      name: '商品中心',
      type: 1,
      url: '/main/product',
      icon: 'el-icon-goods',
      sort: 3,
      children: [
        {
          id: 15,
          url: '/main/product/category',
          name: '商品类别',
          sort: 104,
          type: 2,
          children: [
            {
              id: 30,
              url: null,
              name: '创建类别',
              sort: null,
              type: 3,
              parentId: 15,
              permission: 'system:category:create'
            },
            {
              id: 31,
              url: null,
              name: '删除类别',
              sort: null,
              type: 3,
              parentId: 15,
              permission: 'system:category:delete'
            },
            {
              id: 32,
              url: null,
              name: '修改类别',
              sort: null,
              type: 3,
              parentId: 15,
              permission: 'system:category:update'
            },
            {
              id: 33,
              url: null,
              name: '查询类别',
              sort: null,
              type: 3,
              parentId: 15,
              permission: 'system:category:query'
            }
          ],
          parentId: 9
        },
        {
          id: 16,
          url: '/main/product/goods',
          name: '商品信息',
          sort: 105,
          type: 2,
          children: [
            {
              id: 34,
              url: null,
              name: '创建商品',
              sort: null,
              type: 3,
              parentId: 16,
              permission: 'system:shops:create'
            },
            {
              id: 35,
              url: null,
              name: '删除商品',
              sort: null,
              type: 3,
              parentId: 16,
              permission: 'system:shops:delete'
            },
            {
              id: 36,
              url: null,
              name: '修改商品',
              sort: null,
              type: 3,
              parentId: 16,
              permission: 'system:shops:update'
            },
            {
              id: 37,
              url: null,
              name: '查询商品',
              sort: null,
              type: 3,
              parentId: 16,
              permission: 'system:shops:query'
            }
          ],
          parentId: 9
        }
      ]
    },
    {
      id: 41,
      name: '随便聊聊',
      type: 1,
      url: '/main/story',
      icon: 'el-icon-chat-line-round',
      sort: 4,
      children: [
        {
          id: 42,
          url: '/main/story/chat',
          name: '你的故事',
          sort: 108,
          type: 2,
          children: null,
          parentId: 41
        },
        {
          id: 43,
          url: '/main/story/list',
          name: '故事列表',
          sort: 109,
          type: 2,
          children: null,
          parentId: 41
        }
      ]
    },
    {
      id: 999998,
      url: 'https://v3.cn.vuejs.org/guide/introduction.html',
      name: 'Vue3 Doc',
      icon: 'el-icon-collection-tag',
      sort: 99998,
      type: 2,
      children: []
    }
    // {
    //     "id": 999999,
    //     "url": "/main/story/chat",
    //     "name": "你的故事-T",
    //     "icon": "el-icon-edit-outline",
    //     "sort": 99999,
    //     "type": 2,
    //     "children": [],
    // },
  ]
}
