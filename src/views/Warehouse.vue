<template>
  <div class="warehouse-container">
    <div class="header">
      <h1 class="page-title">我的海报库</h1>
      <el-button type="primary" :icon="Upload" @click="uploadDialogVisible = true">上传海报</el-button>
    </div>
    <div class="grid-layout">
      <el-card v-for="poster in myPosters" :key="poster.id" class="poster-card card" shadow="hover" :body-style="{ padding: '0px' }">
        <img :src="poster.imageUrl" class="poster-image" alt="Poster image" />
        <div class="poster-info">
          <h3 class="poster-title">{{ poster.title }}</h3>
          <p class="poster-description">{{ poster.description }}</p>
          <div class="actions">
            <el-button type="primary" :icon="Edit" circle />
            <el-button type="danger" :icon="Delete" circle />
          </div>
        </div>
      </el-card>
    </div>

    <!-- 上传弹窗 (逻辑未实现) -->
    <el-dialog v-model="uploadDialogVisible" title="上传新海报" width="60%">
      <p>这里是上传表单...</p>
      <template #footer>
        <el-button @click="uploadDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="uploadDialogVisible = false">提交</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Upload, Edit, Delete } from '@element-plus/icons-vue';

const uploadDialogVisible = ref(false);

const myPosters = ref([
  { id: 101, title: '我的收藏：黑暗骑士', description: '混乱的代理人。', imageUrl: 'https://picsum.photos/seed/101/400/600' },
  { id: 102, title: '我的收藏：指环王', description: '我的宝贝。', imageUrl: 'https://picsum.photos/seed/102/400/600' },
  { id: 103, title: '我的收藏：辛德勒的名单', description: '拯救一人，即是拯救全世界。', imageUrl: 'https://picsum.photos/seed/103/400/600' },
  { id: 104, title: '我的收藏：美丽人生', description: '这是一个简单的故事，但不易讲述。', imageUrl: 'https://picsum.photos/seed/104/400/600' },
]);

// 移除了所有 API 请求相关的代码
</script>

<style scoped>
.warehouse-container {
  padding: 80px 24px 24px;
  max-width: 1400px;
  margin: 0 auto;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.page-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #303133;
}

.grid-layout {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
}

.poster-card {
  border-radius: 12px;
  overflow: hidden;
  border: none;
  background-color: #fff;
  position: relative; /* 为按钮定位 */
}

.poster-image {
  width: 100%;
  height: 320px;
  object-fit: cover;
  display: block;
}

.poster-info {
  padding: 16px;
}

.poster-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0 8px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.poster-description {
  font-size: 0.9rem;
  color: #606266;
  margin: 0;
  height: 40px;
  overflow: hidden;
}

.actions {
  position: absolute;
  bottom: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
}
</style>
