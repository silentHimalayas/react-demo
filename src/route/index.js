import {lazy} from 'react';

// 配置123
const routeConfig = [
  {
    name: 'willLeave',
    icon: 'bug',
    path: '/willLeave',
    component: lazy(() => import('../views/willLeave'))
  },
  {
    name: 'scrollComp',
    icon: 'enviroment',
    path: '/scrollComp',
    component: lazy(() => import('../views/srollTop'))
  },
  {
    name: 'lifeCycle',
    icon: 'heart',
    path: '/lifeCycle',
    component: lazy(() => import('../views/lifeCycle'))
  },
  {
    name: 'context',
    path: '/context',
    component: lazy(() => import('../views/context'))
  },
  {
    name: 'error',
    path: '/error',
    component: lazy(() => import('../views/error'))
  },
  {
    name: 'typeScript',
    path: '/typeScript',
    component: lazy(() => import('../views/typeScript'))
  },
  {
    name: 'hooks',
    path: '/hooks',
    component: lazy(() => import('../views/hooks'))
  },
  {
    name: 'car',
    icon: 'car',
    path: '/nestedRouter',
    component: lazy(() => import('../views/nestedRouter')),
    children: [
      {
        name: 'car - caseOne',
        path: '/nestedRouter/caseOne',
        component: lazy(() => import('../views/nestedRouter/caseOne'))
      }
    ]
  },
]
export default routeConfig;