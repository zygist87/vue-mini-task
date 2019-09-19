export default {
  path: '/about',
  // name: 'About',
  component: () => import('@/views/About'),
  meta: {
    displayName: 'About',
    defaultName: 'About:Education'
  },
  children: [
    {
      path: '',
      name: 'About:Education',
      component: () => import('@/views/About/Education')
    },
    {
      path: 'career',
      name: 'About:Career',
      component: () => import('@/views/About/Career')
    },
    {
      path: 'skills',
      name: 'About:Skills',
      component: () => import('@/views/About/Skills')
    }
  ]
}
