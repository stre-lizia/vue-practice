/// <reference types="vite/client" />
declare module 'vue-router'
declare module '*.vue' {
  import { defineComponent } from 'vue'
  const Component: ReturnType<typeof defineComponent>
  export default Component
}
