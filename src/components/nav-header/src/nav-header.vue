<template>
  <div class="nav-header">
    <el-icon :size="25">
      <Fold @click="handleFlodChange" v-if="isFlod" />
      <Expand @click="handleFlodChange" v-else />
    </el-icon>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
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
