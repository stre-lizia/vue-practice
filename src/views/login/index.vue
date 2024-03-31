<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="24">
        <el-form
          class="login_form"
          :rules="rules"
          :model="loginForm"
          ref="loginForms"
        >
          <h1>Hello</h1>
          <h2>欢迎来到 strelizia 的测试项目</h2>
          <el-form-item prop="username">
            <el-input :prefix-icon="User" v-model="loginForm.username" />
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              type="password"
              :prefix-icon="Lock"
              v-model="loginForm.password"
              show-password
            />
          </el-form-item>
          <el-form-item>
            <el-button
              class="login_btn"
              :loading="loading"
              type="primary"
              size="default"
              @click="login"
            >
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="12" :xs="0" />
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { ElNotification } from 'element-plus'
import { User, Lock } from '@element-plus/icons-vue'
import useUserStore from '@/store/modules/user'
import { getTime } from '@/utils/times'
let loginForms = ref()
let loginForm = reactive({
  username: '',
  password: '',
})
let loading = ref(false)
let $router = useRouter()
let userStore = useUserStore()
const validatorUsername = (rule: any, value: any, callback: any) => {
  if (value.length >= 5) callback()
  else callback(new Error('账号长度至少五位'))
}
const validatorPassword = (rule: any, value: any, callback: any) => {
  if (value.length >= 6) callback()
  else callback(new Error('密码长度至少六位'))
}
const rules = {
  username: [{ trigger: 'change', validator: validatorUsername }],
  password: [{ trigger: 'change', validator: validatorPassword }],
}
const login = async () => {
  await loginForms.value.validate()
  loading.value = true
  try {
    await userStore.userLogin(loginForm)
    $router.push('/')
    loading.value = false
    ElNotification({
      type: 'success',
      message: '欢迎回来',
      title: `Hi,${getTime()}好`,
    })
  } catch (error) {
    loading.value = false
    ElNotification({
      type: 'error',
      message: (error as Error).message,
    })
  }
}
</script>

<style scoped lang="scss">
.login_container {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/login/bak_01.png') no-repeat;
  background-size: cover;
  .login_form {
    position: relative;
    width: 80%;
    top: 30vh;
    margin-left: 10%;
    background: skyblue;
    padding: 40px;
    border-radius: 4px;
    h1 {
      color: white;
      font-size: 40px;
    }
    h2 {
      color: white;
      font-size: 20px;
      margin: 20px 0px;
    }
    .login_btn {
      width: 100%;
    }
  }
}
</style>
