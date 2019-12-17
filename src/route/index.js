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
    path: '/nestedRouter',
    component: loadable(() => import('../views/nestedRouter')),
    children: [
      {
        name: 'car - caseOne',
        path: '/nestedRouter/caseOne',
        component: loadable(() => import('../views/nestedRouter/caseOne'))
      }
    ]
  },
]
export default routeConfig;