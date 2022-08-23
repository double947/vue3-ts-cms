<template>
  <div class="login-container flex justify-center items-center fitW fitH">
    <LoginPanel />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LoginPanel from './cpns/login-panel.vue'

export default defineComponent({
  name: 'login',
  components: { LoginPanel },
  setup() {
    return {}
  }
})
</script>

<style lang="less" scoped>
.login-container {
  background: url('~assets/img/login-bg.svg');
}
</style>
