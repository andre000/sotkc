import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/Stocks',
      name: 'stock',
      component: () => import(/* webpackChunkName: "stock" */ './views/Stock.vue'),
    },
    {
      path: '/Portfolio',
      name: 'portfolio',
      component: () => import(/* webpackChunkName: "portfolio" */ './views/Portfolio.vue'),
    },
    {
      path: '/EndDay',
      name: 'day',
      component: () => import(/* webpackChunkName: "day" */ './views/Day.vue'),
    },
    {
      path: '*',
      name: 'not_found',
      component: () => import(/* webpackChunkName: "404" */ './views/404.vue'),
    },
  ],
});
