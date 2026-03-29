<template>
  <div class="card poster-card">
    <img :src="poster.imageUrl" :alt="poster.name" class="poster-image" />
    <div class="poster-info">
      <h3 class="poster-name">{{ poster.name }}</h3>
      <div class="tags">
        <el-tag v-for="tag in poster.tags" :key="tag" class="tag" size="small">{{ tag }}</el-tag>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  poster: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.poster-card {
  cursor: pointer;
  overflow: hidden;
}

.poster-image {
  width: 100%;
  height: 400px; /* Or adjust as needed */
  object-fit: cover;
  display: block;
}

.poster-info {
  padding: 16px;
}

.poster-name {
  margin: 0 0 10px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
</style>
