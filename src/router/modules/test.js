import Layout from '@/layout'

export default [{
  path: '/test',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Test',
  meta: {
    title: '测试菜单',
    icon: 'dashboard',
    roles: ['admin', 'user']
  },
  children: [
    {
      path: 'test',
      component: () => import('@/views/test-mock'),
      name: 'Test',
      meta: { title: 'mock测试', noCache: true, roles: ['admin', 'user'] }
    }
  ]
}]