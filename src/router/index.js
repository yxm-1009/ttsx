import Vue from 'vue'
import VueRouter from 'vue-router' // 路由的核心模块
// 引入路由的模块
import Index from '@/views/Index'
// import Categroy from '@/views/Categroy'
// import Cart from '@/views/Cart'
// import User from '@/views/User'
import ErrorView from '@/views/Error'
// 以下是 index 的子页面

// 以下是 Categroy 的子页面

// 以下是 Cart 的子页面

// 以下是 User 的子页面

Vue.use(VueRouter) // 注册路由插件

// 路由映射表
// 分为嵌套路由和轮播路由
const routes = [
  // 视图组件
  {
    path: '/index',
    component: Index
  },
  {
    path: '/category',
    // 路由懒加载，提高用户体验。SEO优化   解决 首屏加载过慢的问题
    component: () => import('@/views/Category')
  },
  {
    path: '/cart',
    component: () => import('@/views/Cart')
  },
  {
    path: '/user',
    component: () => import('@/views/User')
  },
  // 页面重定向
  {
    path: '/',
    redirect: '/index' // 重定向
  },
  {
    // 代码顺序由上至下，*的优先级最低，用户随便输入网址，不存在路径，会自动转到ErrorView
    path: '*',
    component: ErrorView // 重定向
  }

]

// 创建路由模块
const router = new VueRouter({
  routes // 路由映射表的注册，json同名情况
})
export default router
