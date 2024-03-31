<template>
  <router-view></router-view>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { reqLogin } from './api/user'
onMounted(() => {
  console.log('Hello')
  reqLogin({ username: 'admin', password: '111111' })
})
</script>

<style scoped></style>
