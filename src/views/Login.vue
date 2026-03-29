<template>
  <div class="login-container">
    <div class="login-card">
      <h2 class="title">{{ isLogin ? '欢迎回来' : '创建账号' }}</h2>
      <el-form :model="form" :rules="rules" ref="formRef">
        <el-form-item prop="username">
          <el-input v-model="form.username" placeholder="用户名" :prefix-icon="User" />
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="form.password"
            type="password"
            placeholder="密码"
            show-password
            :prefix-icon="Lock"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleSubmit" class="login-btn">{{ isLogin ? '登录' : '注册' }}</el-button>
        </el-form-item>
        <div class="switch-mode">
          <el-link type="primary" @click="toggleMode">{{ isLogin ? '还没有账号？去注册' : '已有账号？去登录' }}</el-link>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { User, Lock } from '@element-plus/icons-vue';
import request from '../utils/request';
import { ElMessage } from 'element-plus';

const router = useRouter();
const formRef = ref(null);
const isLogin = ref(true);

const form = reactive({
  username: '',
  password: '',
});

const rules = reactive({
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
});

const toggleMode = () => {
  isLogin.value = !isLogin.value;
  formRef.value.resetFields();
};

const handleSubmit = () => {
  formRef.value.validate(async (valid) => {
    if (valid) {
      const apiPath = isLogin.value ? '/user/login' : '/user/register';
      try {
        const response = await request.post(apiPath, form);
        if (isLogin.value) {
          localStorage.setItem('token', response.token);
          ElMessage.success('登录成功');
          router.push('/plaza');
        } else {
          ElMessage.success('注册成功，请登录');
          toggleMode(); // 切换回登录模式
        }
      } catch (error) {
        // request 拦截器中已经处理了通用错误提示
        console.error(error);
      }
    }
  });
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
  background-size: cover;
}

.login-card {
  width: 350px;
  padding: 40px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
}

.title {
  text-align: center;
  color: #fff;
  margin-bottom: 30px;
}

.login-btn {
  width: 100%;
}

.switch-mode {
  text-align: center;
  margin-top: 10px;
}
</style>
