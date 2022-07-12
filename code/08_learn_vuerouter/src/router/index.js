import {createRouter, createWebHashHistory} from 'vue-router'
// 同步打包 则一开始就打包所有组件
// import Home from "../pages/Home.vue";
// import About from "../pages/About.vue";
const routes = [
    {
        path: "/",
        redirect: "/home"
    },
    {
        path: '/home',
        name: 'home',
        meta: {
            name: "why",
            age: 18,
            height: 1.88
        },
        component: () => import(/* webpackChunkName: "home-chunk" */"../pages/Home.vue"),
        children: [
            {
                path: '',//重定向不加/
                //两种方式都能成功重定向
                redirect: '/home/message',
                // redirect: 'message',
            },
            {
                path: 'message',
                name: 'message',
                //路由懒加载 打包后，对应组件分包，不在app.js中
                component: () => import('../pages/HomeMessage.vue')
            },
            // {
            //     path: 'moment',
            //     name: 'moment',
            //     component: () => import('../pages/HomeMoment.vue')
            // },
            {
                path: 'shop',
                name: 'shop',
                component: () => import('../pages/HomeShops.vue')
            }
        ]
    },
    {
        path: '/about',
        name: 'about',
        mata: {
            requireAuth: true
        },
        component: () => import(/*webpackChunkName:"about-chunk"*/"../pages/About.vue")
    },
    {
        path: '/user/:username/id/:id',
        name: 'user',
        mata: {
            requireAuth: true
        },
        component: () => import(/*webpackChunkName:"user-chunk"*/"../pages/User.vue")
    },
    {
        path: "/:pathMatch(.*)",//匹配不存在的任意路径
        // path: "/:pathMatch(.*)*",//添加*后输入的路径被解析为数组(params.pathMatch)
        component: () => import("../pages/NotFound")
    },
    {
        path: "/login",
        component: () => import("../pages/Login.vue")
    },
]


const router = createRouter({
    routes,
    // history: createWebHistory(),
    history: createWebHashHistory(),
})

//创建要添加的路由路由
const categoryRoute = {
    path: '/category',
    component: () => import('../pages/Category.vue')
}

const homeMomentRoute = {
    path: 'moment',
    component: () => import('../pages/HomeMoment.vue')
}
//添加和home同级的路由
router.addRoute(categoryRoute)
//添加子路由 /home/moment
router.addRoute('home', homeMomentRoute)


//导航守卫
let count = 0
// to: Route对象, 即将跳转到的Route对象
// from: Route对象,
/**
 * 返回值问题:
 *    1.false: 不进行导航
 *    2.undefined或者不写返回值: 进行默认导航
 *    3.字符串: 路径, 跳转到对应的路径中
 *    4.对象: 类似于 router.push({path: "/login", query: ....})
 */
router.beforeEach((to, from) => {
    console.log(`进行了${count++}次`)
    //包含home则跳转到about页面
    // if (to.path.indexOf("/home") !== -1) {
    //   return "/about"
    // }
    if (to.path !== "/login") {
        const token = window.localStorage.getItem("token");
        if (!token) {
            return "/login"
        }
    }
})
export default router
