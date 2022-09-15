<template>
  <div class="login-phone">
    <el-form :model="phone" :rules="rules" label-width="65px">
      <el-form-item label="手机号" prop="num">
        <el-input v-model="phone.num" type="tel" autocomplete="off" />
      </el-form-item>
      <el-form-item label="验证码" prop="captcha">
        <div class="flex">
          <el-input
            v-model="phone.captcha"
            type="password"
            autocomplete="off"
          />
          <el-button type="primary" class="ml2">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  setup() {
    const phone = reactive({
      num: '',
      captcha: ''
    })
    // 校验规则
    const rules = {
      num: [
        {
          required: true,
          message: '手机号是必填内容~',
          trigger: 'blur'
        },
        {
          pattern: /^(?:(?:\+|00)86)?1[3-9]\d{9}$/,
          message: '请输入正确格式手机号~',
          trigger: 'blur'
        }
      ],
      captcha: [
        {
          required: true,
          message: '验证码是必填内容~',
          trigger: 'blur'
        },
        {
          pattern: /^[0-9]{6}$/,
          message: '验证码必须为6位数字~',
          trigger: 'blur'
        }
      ]
    }
    return {
      phone,
      rules
    }
  }
})
</script>

<style scoped></style>
