import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';
import Plaza from '../views/Plaza.vue';
import Warehouse from '../views/Warehouse.vue';
import Messages from '../views/Messages.vue';

const routes = [
  {
    path: '/',
    redirect: '/plaza',
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { isPublic: true } // 公开页面
  },
  {
    path: '/plaza',
    name: 'Plaza',
    component: Plaza,
  },
  {
    path: '/warehouse',
    name: 'Warehouse',
    component: Warehouse,
  },
  {
    path: '/messages',
    name: 'Messages',
    component: Messages,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from) => {
  const token = localStorage.getItem('token');

  // 如果目标路由不是公开的，且没有token，则重定向到登录页
  if (!to.meta.isPublic && !token) {
    return '/login';
  }
  
  // 否则，允许导航
  return true;
});

export default router;
