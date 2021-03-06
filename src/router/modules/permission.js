import Layout from '@/layout'

export default [{
  path: '/permission',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Permission',
  meta: {
    title: '权限菜单',
    icon: 'dashboard',
    roles: ['admin', 'user']
  },
  children: [
    {
      path: 'admin',
      component: () => import('@/views/permission-demo/admin'),
      name: 'admin',
      meta: { title: 'admin可见菜单', noCache: true, roles: ['admin'] }
    },
    {
      path: 'user',
      component: () => import('@/views/permission-demo/user'),
      name: 'user',
      meta: { title: 'user可见菜单', noCache: true, roles: ['user'] }
    },
    {
      path: 'edit',
      component: () => import('@/views/permission-demo/edit'),
      name: 'user',
      meta: { title: 'edit可见菜单', noCache: true, roles: ['edit'] }
    },
  ]
}]