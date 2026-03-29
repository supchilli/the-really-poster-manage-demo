<template>
  <div class="plaza-container">
    <h1 class="plaza-title">发现灵感</h1>
    <div class="grid-layout">
      <el-card 
        v-for="item in posterList" 
        :key="item.id" 
        class="poster-card card" 
        shadow="hover" 
        :body-style="{ padding: '0px' }"
      >
        <img :src="item.imageUrl" class="poster-image" alt="Poster image" />
        <div class="poster-info">
          <h3 class="poster-title">{{ item.title }}</h3>
          <p class="poster-description">{{ item.description }}</p>
          <div class="poster-author">
            <span>上传者: {{ item.author }}</span>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const posterList = ref([
  { id: 1, title: '星际穿越', description: '爱是唯一可以超越时间和空间维度的东西。', author: 'Christopher', imageUrl: 'https://picsum.photos/seed/1/400/600' },
  { id: 2, title: '盗梦空间', description: '你的思想，就是犯罪现场。', author: 'Nolan', imageUrl: 'https://picsum.photos/seed/2/400/600' },
  { id: 3, title: '阿甘正传', description: '生活就像一盒巧克力，你永远不知道下一颗是什么味道。', author: 'Zemeckis', imageUrl: 'https://picsum.photos/seed/3/400/600' },
  { id: 4, title: '泰坦尼克号', description: 'You jump, I jump.', author: 'Cameron', imageUrl: 'https://picsum.photos/seed/4/400/600' },
  { id: 5, title: '千与千寻', description: '不要忘记自己的名字，否则就找不到回家的路了。', author: 'Miyazaki', imageUrl: 'https://picsum.photos/seed/5/400/600' },
  { id: 6, title: '楚门的世界', description: '如果再也见不到你，祝你早安，午安，晚安。', author: 'Weir', imageUrl: 'https://picsum.photos/seed/6/400/600' },
  { id: 7, title: '机器人总动员', description: '我不要只是生存，我要活得有意义。', author: 'Stanton', imageUrl: 'https://picsum.photos/seed/7/400/600' },
  { id: 8, title: '三傻大闹宝莱坞', description: '追求卓越，成功就会在不经意间追上你。', author: 'Hirani', imageUrl: 'https://picsum.photos/seed/8/400/600' },
]);

</script>

<style scoped>
.plaza-container {
  padding: 80px 24px 24px; /* 留出顶部导航栏空间 */
  max-width: 1400px;
  margin: 0 auto;
}

.plaza-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: #303133;
}

.grid-layout {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
}

.poster-card {
  border-radius: 12px;
  overflow: hidden; /* 确保图片圆角生效 */
  border: none;
  background-color: #fff;
}

.poster-image {
  width: 100%;
  height: 320px; /* 固定图片高度 */
  object-fit: cover; /* 保证图片不变形 */
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
  margin: 0 0 16px 0;
  height: 40px; /* 限制描述为两行 */
  overflow: hidden;
}

.poster-author {
  font-size: 0.8rem;
  color: #909399;
  text-align: right;
}
</style>
