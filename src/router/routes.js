
const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import('pages/main/login.vue')
  },
  {
    path: '/',
    component: () => import('layouts/master.vue'),
    children: [
      { path: '/dashboard', component: () => import('pages/main/dashboard.vue') },
      { path: '/logger/:sn', component: () => import('pages/main/logger.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/error404.vue')
  })
}

export default routes
