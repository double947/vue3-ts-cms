<template>
  <div class="login-panel flex flex-column justify-center items-center mb4">
    <h1>后台管理系统</h1>
    <el-tabs class="demo-tabs" type="border-card" stretch v-model="currentTab">
      <el-tab-pane name="account">
        <template #label>
          <span class="custom-tabs-label flex items-center">
            <el-icon class="mr1"><Avatar /></el-icon>
            账号登录
          </span>
        </template>
        <LoginAccount ref="loginAccountRef" />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span class="custom-tabs-label flex items-center">
            <el-icon class="mr1"><Iphone /></el-icon>
            手机号登录
          </span>
        </template>
        <LoginPhone ref="loginPhoneRef" />
      </el-tab-pane>
    </el-tabs>
    <div class="flex justify-around my2 fitW">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link>忘记密码</el-link>
    </div>
    <div class="fitW px2 borderBox">
      <el-button type="primary" class="fitW" @click="handleLoginClick"
        >立即登录</el-button
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'

export default defineComponent({
  name: 'LoginPanle',
  setup() {
    const isKeepPassword = ref(true)
    const loginAccountRef = ref<InstanceType<typeof LoginAccount>>()
    const loginPhoneRef = ref<InstanceType<typeof LoginPhone>>()
    const currentTab = ref('account')

    const handleLoginClick = () => {
      if (currentTab.value === 'account') {
        loginAccountRef.value?.accountLoginAction(isKeepPassword.value)
      } else {
        loginPhoneRef.value?.phoneLoginAction()
      }
    }
    return {
      isKeepPassword,
      loginAccountRef,
      loginPhoneRef,
      currentTab,
      handleLoginClick
    }
  },
  components: { LoginAccount, LoginPhone }
})
</script>

<style lang="less" scoped>
.login-panel {
  width: 320px;
}
</style>
