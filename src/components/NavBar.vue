<template>
  <el-menu
    :default-active="activeIndex"
    class="navbar"
    mode="horizontal"
    @select="handleSelect"
    router
  >
    <el-menu-item index="/plaza" class="logo-item">
      <el-icon :size="24" style="margin-right: 8px;"><Picture /></el-icon>
      <span>海报收藏家</span>
    </el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="/plaza">发现广场</el-menu-item>
    <el-menu-item index="/warehouse">我的海报库</el-menu-item>
    <el-menu-item index="/messages">消息中心</el-menu-item>
    <el-sub-menu index="user-menu">
      <template #title>
        <el-avatar :size="30" :src="user.avatarUrl || defaultAvatar" />
        <span class="username">{{ user.name }}</span>
      </template>
      <el-menu-item index="logout" @click="logout">退出登录</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { Picture } from '@element-plus/icons-vue';

const defaultAvatar = 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png';

const router = useRouter();
const activeIndex = ref(router.currentRoute.value.path);

const user = reactive({
  name: 'User', // 应该从API获取
  avatarUrl: ''
});

const handleSelect = (key) => {
  activeIndex.value = key;
};

const logout = () => {
  localStorage.removeItem('token');
  router.push('/login');
};
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 0 20px;
  background-color: #ffffff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.logo-item {
  font-size: 20px;
  font-weight: bold;
  display: flex;
  align-items: center;
}

.flex-grow {
  flex-grow: 1;
}

.username {
  margin-left: 10px;
}
</style>
