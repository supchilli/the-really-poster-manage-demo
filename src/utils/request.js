import axios from 'axios';
import { ElMessage } from 'element-plus';
import router from '../router';

// 1. 创建 Axios 实例
const service = axios.create({
  baseURL: '/api', // Vite 代理会自动处理 /api 前缀
  timeout: 10000,  // 请求超时时间 10s
});

// 2. 请求拦截器：自动携带 Token
service.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 3. 响应拦截器：统一处理错误和 401 未登录状态
service.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      ElMessage.error('登录已过期，请重新登录');
      localStorage.removeItem('token');
      router.push('/login');
    } else {
      ElMessage.error(error.message || '网络请求失败');
    }
    return Promise.reject(error);
  }
);

export default service;