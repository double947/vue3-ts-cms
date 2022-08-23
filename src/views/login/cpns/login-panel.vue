<template>
  <div class="login-panel flex flex-column justify-center items-center">
    <h1>后台管理系统</h1>
    <el-tabs type="border-card" stretch class="demo-tabs">
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label flex items-center">
            <el-icon><Avatar /></el-icon>
            <span class="ml1">账号登录</span>
          </span>
        </template>
        账号登录
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label flex items-center">
            <el-icon><Iphone /></el-icon>
            <span class="ml1">手机号登录</span>
          </span>
        </template>
        手机号登录
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LoginPanle',
  setup() {
    return {}
  }
})
</script>

<style lang="less" scoped>
.login-panel {
  width: 320px;
}
</style>
