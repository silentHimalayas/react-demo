import loadable from '@loadable/component'
// 配置123
const routeConfig = [
  {
    path: '/',
    component: loadable(() => import('../App'))
  },
  {
    path: '/willLeave/asd',
    component: loadable(() => import('../views/willLeave'))
  },
  {
    path: '/scrollComp',
    component: loadable(() => import('../views/srollTop'))
  },
  {
    path: '/lifeCycle',
    component: loadable(() => import('../views/lifeCycle'))
  },
  {
    path: '/context',
    component: loadable(() => import('../views/context'))
  }
]
export default routeConfig;