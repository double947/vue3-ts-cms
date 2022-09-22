<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="logo-img" src="~@/assets/img/logo.svg" alt="logo" />
      <span class="logo-title">CMS</span>
    </div>
    <el-menu default-active="2" class="el-menu-vertical-demo">
      <template v-for="item in userMenus" :key="item.id"></template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'

export default defineComponent({
  setup() {
    const store = useStore()
    const userMenus = computed(() => {
      return store.state.login.userMenus
    })
    return {
      userMenus
    }
  }
})
</script>

<style scoped lang="less">
.nav-menu {
  height: 100%;
  background-color: #001529;

  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .logo-img {
      height: 100%;
      margin: 0 10px;
    }

    .logo-title {
      font-size: 16px;
      font-weight: 700;
      color: white;
    }
  }
}
</style>
