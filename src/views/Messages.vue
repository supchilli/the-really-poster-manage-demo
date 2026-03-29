<template>
  <div class="messages-container">
    <div class="card messages-card">
      <el-tabs v-model="activeTab">
        <el-tab-pane label="收到的申请" name="received">
          <el-table :data="receivedRequests" style="width: 100%">
            <el-table-column prop="fromUser" label="申请人" width="120" />
            <el-table-column prop="posterName" label="申请交换的海报" />
            <el-table-column label="状态" width="120">
              <template #default="{ row }">
                <el-tag :type="getStatusType(row.status)">{{ formatStatus(row.status) }}</el-tag>
              </template>
            </el-table-column>
            <el-table-column label="操作" width="180">
              <template #default="{ row }">
                <el-button v-if="row.status === 'pending'" type="success" size="small" @click="() => handleRequest(row, 'approved')">同意</el-button>
                <el-button v-if="row.status === 'pending'" type="danger" size="small" @click="() => handleRequest(row, 'rejected')">拒绝</el-button>
                <span v-else>已处理</span>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="发出的申请" name="sent">
           <el-table :data="sentRequests" style="width: 100%">
            <el-table-column prop="posterName" label="申请交换的海报" />
            <el-table-column label="状态" width="150">
              <template #default="{ row }">
                <el-tag :type="getStatusType(row.status)">{{ formatStatus(row.status) }}</el-tag>
              </template>
            </el-table-column>
            <el-table-column label="信息" width="200">
              <template #default="{ row }">
                <span v-if="row.status === 'approved'" class="wechat-info">对方微信号: {{ row.wechatId }}</span>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { ElMessage } from 'element-plus';

const activeTab = ref('received');

const receivedRequests = ref([
    { id: 1, fromUser: '张三', posterName: '《星际穿越》', status: 'pending' },
    { id: 2, fromUser: '李四', posterName: '《盗梦空间》', status: 'pending' },
    { id: 3, fromUser: '王五', posterName: '《阿甘正传》', status: 'approved' },
    { id: 4, fromUser: '赵六', posterName: '《泰坦尼克号》', status: 'rejected' },
]);

const sentRequests = ref([
    { id: 5, posterName: '《千与千寻》', status: 'pending' },
    { id: 6, posterName: '《楚门的世界》', status: 'approved', wechatId: 'wx_123456' },
    { id: 7, posterName: '《机器人总动员》', status: 'rejected' },
]);

const getStatusType = (status) => {
  if (status === 'approved') return 'success';
  if (status === 'rejected') return 'danger';
  return 'info';
};

const formatStatus = (status) => {
  if (status === 'pending') return '待处理';
  if (status === 'approved') return '已同意';
  if (status === 'rejected') return '已拒绝';
  return '未知';
}

// 模拟处理请求
const handleRequest = (row, newStatus) => {
  row.status = newStatus;
  ElMessage.success('操作成功');
};

// 移除了所有 API 请求相关的代码
</script>

<style scoped>
.messages-container {
  padding-top: 84px;
  display: flex;
  justify-content: center;
}

.messages-card {
  width: 80%;
  max-width: 1000px;
  padding: 24px;
}

.wechat-info {
  color: var(--el-color-success);
  font-weight: bold;
}
</style>
