<template>
  <div id="app">
    <NavBar v-if="showNavBar" />
    <router-view />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import NavBar from './components/NavBar.vue';

const route = useRoute();

// 创建一个计算属性，判断当前路由是否为'Login'
// 如果是，则不显示导航栏；否则，显示导航栏
const showNavBar = computed(() => route.name !== 'Login');
</script>

<style>
html, body, #app {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  background-color: #f5f7fa; /* 保持您设定的全局背景色 */
  font-family: 'Helvetica Neue', Arial, sans-serif;
}
</style>
