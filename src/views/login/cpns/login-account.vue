<template>
  <div class="login-account">
    <el-form :model="account" :rules="rules" label-width="90px" ref="formRef">
      <el-form-item label="用户名" prop="name">
        <el-input v-model="account.name" type="text" autocomplete="off" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          v-model="account.password"
          type="password"
          autocomplete="off"
        />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { ElForm } from 'element-plus/es'
import LocalCache from '@/utils/cache'

export default defineComponent({
  setup() {
    const store = useStore()

    const account = reactive({
      name: LocalCache.getCache('name') ?? '',
      password: LocalCache.getCache('password') ?? ''
    })
    const formRef = ref<InstanceType<typeof ElForm>>()

    const accountLoginAction = (isKeepPassword: boolean) => {
      formRef.value?.validate((valid) => {
        console.log(valid)
        if (!valid) return
        // 1. 是否需要记住密码
        if (isKeepPassword) {
          LocalCache.setCache('name', account.name)
          LocalCache.setCache('password', account.password)
        } else {
          LocalCache.removeCache('name')
          LocalCache.removeCache('password')
        }
        // 2. 登录验证
        store.dispatch('login/accountLoginAction', { ...account })
      })
    }
    // 校验规则
    const rules = {
      name: [
        {
          required: true,
          message: '用户名是必填内容~',
          trigger: 'blur'
        },
        {
          pattern: /^[a-z0-9]{5,10}$/,
          message: '用户名必须是5~10个字母或者数字~',
          trigger: 'blur'
        }
      ],
      password: [
        {
          required: true,
          message: '密码是必填内容~',
          trigger: 'blur'
        },
        {
          pattern: /^[a-z0-9]{3,}$/,
          message: '用户名必须是3位以上的字母或者数字~',
          trigger: 'blur'
        }
      ]
    }

    return {
      account,
      rules,
      accountLoginAction,
      formRef
    }
  }
})
</script>

<style scoped></style>
