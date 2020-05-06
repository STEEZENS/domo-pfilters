import Vue from 'vue';
import VueRouter from 'vue-router';
import scrollBehavior from './scrollBehavior';

Vue.use(VueRouter);

const routes = [
  {
    path: '/multi-select',
    name: 'multi-select',
    component: () => import('@/views/MultiSelectView'),
  },
  {
    path: '/single-select',
    name: 'single-select',
    component: () => import('@/views/SingleSelectView'),
  },
  {
    path: '/interdependent-select',
    name: 'interdependent-select',
    component: () => import('@/views/InterdependentSelectView'),
  },
  {
    path: '*',
    redirect: '/multi-select',
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior,
});

export default router;
