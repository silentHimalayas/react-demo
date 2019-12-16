import loadable from '@loadable/component'
// 配置123
const routeConfig = [
  {
    name: 'willLeave',
    icon: 'bug',
    path: '/willLeave',
    component: loadable(() => import('../views/willLeave'))
  },
  {
    name: 'scrollComp',
    icon: 'enviroment',
    path: '/scrollComp',
    component: loadable(() => import('../views/srollTop'))
  },
  {
    name: 'lifeCycle',
    icon: 'heart',
    path: '/lifeCycle',
    component: loadable(() => import('../views/lifeCycle'))
  },
  {
    name: 'context',
    path: '/context',
    component: loadable(() => import('../views/context'))
  },
  {
    name: 'car',
    icon: 'car',
    path: '/other',
    children: [
      {
        name: 'car - lifeCycle',
        path: '/car/lifeCycle',
        component: loadable(() => import('../views/lifeCycle'))
      },
      {
        name: 'car - scrollComp',
        path: '/car/scrollComp',
        component: loadable(() => import('../views/context'))
      },
    ]
  },
]
export default routeConfig;