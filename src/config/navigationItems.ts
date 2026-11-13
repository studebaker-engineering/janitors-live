import About from '@/pages/About'
import Home from '@/pages/Home'
import Music from '@/pages/Music'
import Shows from '@/pages/Shows'
import type { NavigationItem } from '@/types'

export const navigationItems: NavigationItem[] = [
  {
    sortOrder: 0,
    label: 'Home',
    link: '/',
    component: Home,
    className: 'rotate-1',
  },
  {
    sortOrder: 1,
    label: 'Shows',
    link: '/shows',
    component: Shows,
    className: '-rotate-2',
  },
  {
    sortOrder: 2,
    label: 'About',
    link: '/about',
    component: About,
    className: '',
  },
  {
    sortOrder: 3,
    label: 'Music',
    link: '/music',
    component: Music,
    className: 'rotate-1',
  },
];
