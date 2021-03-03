import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
  },
  {
    path: '/test',
    name: 'Test',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/Test.vue'),
  },

  // 用于演示use 拆分业务composition api   
  {
    path: '/use-example',
    name: 'useExample',
    component: () => import('@/views/use-example.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// Vue Router 3
// router.beforeEach((to, from, next) => {
//     if (!isAuthenticated) {
//       next(false);
//     }
//     else { 
//       next();
//     }
//   })

// // Vue Router 4
// // 支持从钩子返回一个值或者promise来代替
// router.beforeEach(() => isAuthenticated);

export default router;
