<template>
  <div class="nav-header flex justify-between w-[100%]">
    <el-icon :size="25">
      <Fold @click="handleFlodChange" v-if="isFlod" />
      <Expand @click="handleFlodChange" v-else />
    </el-icon>
    <div class="content flex flex-[1] justify-between items-center">
      <div>面包屑</div>
      <user-info />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import UserInfo from './user-info.vue'

export default defineComponent({
  components: { UserInfo },
  emits: ['flodChange'],
  setup(props, { emit }) {
    const isFlod = ref(false)
    const handleFlodChange = () => {
      isFlod.value = !isFlod.value
      emit('flodChange', isFlod.value)
    }
    return {
      isFlod,
      handleFlodChange
    }
  }
})
</script>

<style scoped></style>
