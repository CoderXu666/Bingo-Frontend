import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/**
 * Router
 */
export const constantRoutes = [
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  /**
   * 好友聊天页面
   */
  {
    path: '/chat',
    component: () => import('@/views/chat/chat'),
    hidden: true
  },

  /**
   * First Page
   */
  {
    path: '/',
    component: () => import('@/views/first/index'),
    hidden: true
  },

  /**
   * 404 Page
   */
  {path: '*', redirect: '/404', hidden: true}
]

const createRouter = () => new Router({
  scrollBehavior: () => ({y: 0}),
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
